class Adultswim extends Phaser.Scene
{
    constructor()
    {
        super('adultswimScene')
    }
    create()
    {
        let adultswimMusicConfig = {
            rate:1,
            volume: 0.5,
            loop: true
        }
        this. adultswimMuzak = this.sound.add('Preroll', adultswimMusicConfig)
        /*this.adultswimMuzakDelay = this.time.delayedCall(4000, () => {
            this.adultswimMuzak.play()
        })*/
        //this.adultswimMuzak.play()

        cursors = this.input.keyboard.createCursorKeys()

        let title3 = this.add.bitmapText(centerX, centerY, 'aqua_font', 'Press SPACE to continue..' ,52).setOrigin(0.5)
       
        let bigshakeTween = this.tweens.add({
            targets: title3,
            //duration: 2000,
            angle: {
                from: 0, to: 0
            },
            yoyo: true,
            repeat: -1,
            delay: 2000
        })
        bigshakeTween.on('yoyo', () => {this.cameras.main.shake(200, 0.0150)})
    }
    update()
    {
        //this.adultswimMuzak.play()
        if(Phaser.Input.Keyboard.JustDown(cursors.space))
        {
            //this.sound.play('Button')
            this.adultswimMuzak.play()
            this.adultBackground = this.add.tileSprite(0, 0, 960, 580, 'Adult').setOrigin(0, 0)

            this.clockDelay = this.time.delayedCall(1500, () =>{
                this.swimBackground = this.add.tileSprite(0, 0, 960, 580, 'Swim').setOrigin(0, 0)
                //this.adultswimMuzak.play()
                //this.scene.start('creditScene')
                
            })
            this.sceneDelay = this.time.delayedCall(4500, () =>{
                console.log('Credit Scene begun...')
                this.adultswimMuzak.stop()
                this.scene.start('creditScene')
            })
        }
        /*if(Phaser.Input.Keyboard.JustDown(cursors.up))
        {
            this.sceneDelay = this.time.delayedCall(6000, () =>{
                console.log('Credit Scene begun...')
                this.adultswimMuzak.stop()
                //this.scene.start('creditScene')
            })
        }*/
    }
}
