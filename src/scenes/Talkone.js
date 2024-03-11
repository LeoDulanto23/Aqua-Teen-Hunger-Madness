class Talkone extends Phaser.Scene
{
    constructor()
    {
        super('talkoneScene')
    }
    init()
    {
        // dialog constants
        this.DBOX_X = 0			        // dialog box x-position
        this.DBOX_Y = 400			    // dialog box y-position
        this.DBOX_FONT = 'aqua_font'	    // dialog box font key

        this.TEXT_X = 185			    // text w/in dialog box x-position
        this.TEXT_Y = 445			    // text w/in dialog box y-position
        this.TEXT_SIZE = 35		        // text font size (in pixels)
        this.TEXT_MAX_WIDTH = 715	    // max width of text within box

        this.NEXT_TEXT = '[SPACE]'	    // text to display for next prompt
        this.NEXT_X = 900			    // next text prompt x-position
        this.NEXT_Y = 574			    // next text prompt y-position

        this.LETTER_TIMER = 10		    // # ms each letter takes to "type" onscreen

        // dialog variables
        this.dialogConvo = 0			// current "conversation"
        this.dialogLine = 0			    // current line of conversation
        this.dialogSpeaker = null		// current speaker
        this.dialogLastSpeaker = null	// last speaker
        this.dialogTyping = false		// flag to lock player input while text is "typing"
        this.dialogText = null			// the actual dialog text
        this.nextText = null			// player prompt text to continue typing

        // character variables
        this.tweenDuration = 500        // character in/out tween duration

        this.OFFSCREEN_X = -500         // x,y coordinates used to place characters offscreen
        this.OFFSCREEN_Y = 1000
    }
    create()
    {
        let talkmusicConfig = {
            rate: 1,
            volume: 0.5,
            loop: true
        }
        this.talkMusic = this.sound.add('talkmusic',talkmusicConfig)
        this.talkMusic.play()
        this.dialog = this.cache.json.get('Talkone')

        // add dialog box sprite
        //Let's deal with this later, right now we need to get Frylock and Shake to move...
        this.dialogbox = this.add.sprite(this.DBOX_X, this.DBOX_Y, 'talkbox').setOrigin(0)

        // initialize dialog text objects (with no text)
        this.dialogText = this.add.bitmapText(this.TEXT_X -100, this.TEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE)
        this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE)

        this.frylock = this.add.sprite(this.OFFSCREEN_X , this.DBOX_Y, 'ultrafrylock').setOrigin(0, 1)
        this.mastershake = this.add.sprite(this.OFFSCREEN_X , this.DBOX_Y -30, 'ultrashake').setOrigin(0, 1)
        this.shrinkray = this.add.sprite(this.OFFSCREEN_X , this.DBOX_Y -30, 'ultraray').setOrigin(0, 1)

        /*let shrinkrayTween = this.tweens.add({
            targets: shrinkray,
            duration: 1000,
            angle: 0,
            yoyo: true,
            repeat: -1
        })
        shrinkrayTween.on('yoyo', () =>{
            this.cameras.main.flash(200, 0.0075)
        })*/

        cursors = this.input.keyboard.createCursorKeys()

        this.typeText()
    }
    update()
    {
        // check for spacebar press
        if(Phaser.Input.Keyboard.JustDown(cursors.space) && !this.dialogTyping) 
        {
            this.sound.play('Beep')
            this.typeText() // trigger dialog
        }
    }

    typeText() 
    {
        // lock input while typing
        this.dialogTyping = true

        // clear text
        this.dialogText.text = ''
        this.nextText.text = ''

        /* JSON dialog structure: 
            - each array within the main JSON array is a "conversation"
            - each object within a "conversation" is a "line"
            - each "line" can have 3 properties: 
                1. a speaker (required)
                2. the dialog text (required)
                3. an (optional) flag indicating if this speaker is new
        */

        // make sure there are lines left to read in this convo, otherwise jump to next convo
        if(this.dialogLine > this.dialog[this.dialogConvo].length - 1) 
        {
            this.dialogLine = 0
            // I increment the conversation count here...
            // ..but you could create logic to exit if each conversation was self-contained
            this.dialogConvo++
        }
        // make sure we haven't run out of conversations...
        if(this.dialogConvo >= this.dialog.length) {
            // here I'm exiting the final conversation to return to the title...
            // ...but you could add alternate logic if needed
            console.log('End of Conversations')
            // tween out prior speaker's image
            if(this.dialogLastSpeaker) {
                this.tweens.add({
                    targets: this[this.dialogLastSpeaker],
                    x: this.OFFSCREEN_X,
                    duration: this.tweenDuration,
                    ease: 'Linear',
                    onComplete: () => {
                        this.talkMusic.stop()
                        this.playDelay = this.time.delayedCall(1000, () =>{
                            this.sound.play('Click')
                            this.cameras.main.flash(200, 0xFD1DDB, 0.0075)
                        })
                        this.playDelay = this.time.delayedCall(2500, () =>{
                            this.scene.start('playScene')
                        })
                        //this.scene.start('menuScene')
                    }
                })
            }
            // make text box invisible
            this.dialogbox.visible = false

        } else {
            // if not, set current speaker
            this.dialogSpeaker = this.dialog[this.dialogConvo][this.dialogLine]['speaker']
            // check if there's a new speaker (for exit/enter animations)
            if(this.dialog[this.dialogConvo][this.dialogLine]['newSpeaker']) {
                // tween out prior speaker's image
                if(this.dialogLastSpeaker) {
                    this.tweens.add({
                        targets: this[this.dialogLastSpeaker],
                        x: this.OFFSCREEN_X,
                        duration: this.tweenDuration,
                        ease: 'Linear'
                    })
                }
                // tween in new speaker's image
                this.tweens.add({
                    targets: this[this.dialogSpeaker],
                    x: this.DBOX_X + 50,
                    duration: this.tweenDuration,
                    ease: 'Linear'
                })
            }

            // build dialog (concatenate speaker + colon + line of text)
            this.combinedDialog = 
                this.dialog[this.dialogConvo][this.dialogLine]['speaker'].toUpperCase() 
                + ': ' 
                + this.dialog[this.dialogConvo][this.dialogLine]['dialog']

            // create a timer to iterate through each letter in the dialog text
            let currentChar = 0
            this.textTimer = this.time.addEvent({
                delay: this.LETTER_TIMER,
                repeat: this.combinedDialog.length - 1,
                callback: () => { 
                    // concatenate next letter from dialogLines
                    this.dialogText.text += this.combinedDialog[currentChar]
                    // advance character position
                    currentChar++
                    // check if timer has exhausted its repeats 
                    // (necessary since Phaser 3 no longer seems to have an onComplete event)
                    if(this.textTimer.getRepeatCount() == 0) {
                        // show prompt for more text
                        this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, this.NEXT_TEXT, this.TEXT_SIZE).setOrigin(1)
                        this.dialogTyping = false   // un-lock input
                        this.textTimer.destroy()    // destroy timer
                    }
                },
                callbackScope: this // keep Scene context
            })
            
            // final cleanup before next iteration
            this.dialogText.maxWidth = this.TEXT_MAX_WIDTH  // set bounds on dialog
            this.dialogLine++                               // increment dialog line
            this.dialogLastSpeaker = this.dialogSpeaker     // set past speaker
        }
    }
}
