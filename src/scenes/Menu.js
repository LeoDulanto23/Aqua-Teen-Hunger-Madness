class Menu extends Phaser.Scene
{
    constructor()
    {
        super('menuScene')
    }
    create()
    {
        let menuMusicConfig = {
            rate: 1,
            volume: 0.5,
            loop: true
        }
        this.menuMuzak = this.sound.add('Intro', menuMusicConfig)
        this.menuMuzak.play()
        //this.add.bitmapText(centerX, centerY, 'aqua_font', 'Best in the West' , 72).setOrigin(0.5)
        //this.add.bitmapText(centerX, centerY + textSpacer, 'aqua_font', 'Press SPACE lil boi!', 50).setOrigin(0.5)
        this.menuBackground = this.add.tileSprite(0, 0, 960, 580, 'Title').setOrigin(0,0)
        let title1 = this.add.bitmapText(centerX, centerY, 'aqua_font', 'AQUA TEEN HUNGER MADNESS', 52).setOrigin(0.5).setTint(0x3CA2FF)//0x3CA2FF
        let title2 = this.add.bitmapText(centerX, centerY + textSpacer * 2, 'aqua_font', 'Press SPACE to play', 50).setOrigin(0.5).setTint(0x70F235)

        /*let overallDuration = 2500
        let visiblePauseDuration = 500
        let flashDuration = overallDuration - visiblePauseDuration / 3*/

        let shakeTweenA = this.tweens.add({
            targets: title1,
            duration: 500,
            angle: { from: -1, to: 1 },
            yoyo: true,
            tint: 0xFAFD1D,
            repeat: -1,
        })
        shakeTweenA.on('yoyo', () => { this.cameras.main.flash(200, 0.0075,),
        this.cameras.main.shake(200, 0.0075)})

        let shakeTweenB= this.tweens.add({
            targets: title2,
            duration: 7500,
            angle: { from: 1, to: -1},
            yoyo: true,
            repeat: -1,
            scale: {
                from: 1,
                to: 2
            }
        })
        shakeTweenB.on('yoyo', () => {this.cameras.main.fadeIn(10000, 0.0075) })

        cursors = this.input.keyboard.createCursorKeys()
    }
    update()
    {
        if(Phaser.Input.Keyboard.JustDown(cursors.space))
        {
            this.sound.play('Button')
            this.scene.start('adultswimScene')
            this.menuMuzak.stop()
        }
    }
}