class Instruction extends Phaser.Scene
{
    constructor()
    {
        super('instructionScene')
    }
    create()
    {
        //Instructional music
        let instructMusicConfig = {
            rate: 1,
            volume: 0.5,
            loop: true
        }
        this.instructMusic = this.sound.add('Instrumusic',instructMusicConfig)
        this.instructMusic.play()

        //Instruction background
        let Instructional = this.add.tileSprite(0, 0,960, 580, 'Instruction').setOrigin(0, 0)
        console.log('Instructions has started...')

        //Instruct Tween manager
        let instructTweens = this.tweens.add({
            targets: Instructional,
            duration: 5000,
            angle: 0,
            yoyo: true,
            repeat: -1
        })
        instructTweens.on('yoyo', () => {this.cameras.main.flash(200, 0.0100), 
            this.cameras.main.shake(200, 0.0400), this.sound.play('Bruh')
        })

        cursors = this.input.keyboard.createCursorKeys()
    }
    update()
    {
        //Instruction option
        if(Phaser.Input.Keyboard.JustDown(cursors.up))
        {
            this.sound.play('Beep')
            this.instructMusic.stop()
            this.scene.start('talkoneScene')

        }
    }
}
