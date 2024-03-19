class Adultswim extends Phaser.Scene
{
    constructor()
    {
        super('adultswimScene')
    }
    create()
    {
        //adult swim bump
        let adultswimMusicConfig = {
            rate:1,
            volume: 0.5,
            loop: true
        }
        this. adultswimMuzak = this.sound.add('Preroll', adultswimMusicConfig)

        cursors = this.input.keyboard.createCursorKeys()

        //AS intro activation
        let title3 = this.add.bitmapText(centerX, centerY, 'aqua_font', 'Press UP arrow to continue..' ,52).setOrigin(0.5)
       
        //Press Tween Manager
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
        //AS intro option
        if(Phaser.Input.Keyboard.JustDown(cursors.up))
        {
            this.adultswimMuzak.play()
            this.adultBackground = this.add.tileSprite(0, 0, 960, 580, 'Adult').setOrigin(0, 0)

            this.clockDelay = this.time.delayedCall(1500, () =>{
                this.swimBackground = this.add.tileSprite(0, 0, 960, 580, 'Swim').setOrigin(0, 0)
            })
            this.sceneDelay = this.time.delayedCall(4500, () =>{
                console.log('Credit Scene begun...')
                this.adultswimMuzak.stop()
                this.scene.start('creditScene')
            })
        }
    }
}
