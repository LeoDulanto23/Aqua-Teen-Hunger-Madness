class Win extends Phaser.Scene
{
    constructor()
    {
        super('winScene')
    }
    create()
    {
        //Win music Mac and cheetos
        let winmusicConfig = {
            rate: 1,
            volume: 0.9,
            loop: true
        }
        this.winMuzak = this.sound.add('returnMac', winmusicConfig)
        this.winMuzak.play()

        //Drake music meme
        let wsinshatConfig = {
            rate:1,
            volume: 1,
            loop: false
        }
        this.wsinshatMuzak = this.sound.add('Wchat', wsinshatConfig)
        this.wsinshatMuzak.play()
        this.winBackground = this.add.tileSprite(0, 0, 960, 580, 'Youwin').setOrigin(0,0)

        //Timer test
        console.log("Raw game timer value:", game.settings.gameTimer)
        console.log("Rounded game timer value:", Math.round(game.settings.gameTimer / 1000))

        let title10 = this.add.bitmapText(20, centerY + textSpacer *2, 'aqua_font', 'Congratulations!, you survived: ' + Math.round(game.settings.gameTimer / 1000) + ' seconds!', 32).setOrigin(0, 0)
        let title11 = this.add.bitmapText(200, centerY + textSpacer * 3, 'aqua_font', 'Press UP to restart!', 47).setOrigin(0, 0)

        let congratTween = this.tweens.add({
            targets: title10,
            duration: 8000,
            angle: { from: -1, to: 1 },
            yoyo: true,
            repeat: -1,
            scale: {
                from: 1,
                to: 2
            }
        })
        congratTween.on('yoyo', () => {this.cameras.main.shake(300, 0.0150)})

        let restartTween = this.tweens.add({
            targets: title11,
            duration: 5000,
            angle: {
                from: 0, to: 0
            },
            tint: 0xDAFC00,
            yoyo: true,
            repeat: -1,
        })
        
        cursors = this.input.keyboard.createCursorKeys()
    }
    update()
    {
        if(Phaser.Input.Keyboard.JustDown(cursors.up))
        {
            //this.winMuzak.stop()
            this.sound.play('Beep')
            this.winMuzak.stop()
            this.menuDelay = this.time.delayedCall(1500, () => {
                this.scene.start('menuScene')
            })
            //this.scene.start('menuScene')
        }
    }
}