class Gameover extends Phaser.Scene
{
    constructor()
    {
        super('gameoverScene')
    }
    //Bring over data of time remaining in game over scene
    init(data)
    {
        this.timeLast = data.timeLast
    }
    create()
    {
        console.log('Game Over is here...')
        console.log('Our time is working...')

        //game over short music
        let gameOverConfig= {
            rate: 1,
            volume: 1,
            loop: false
        }
        this.gameOverMusic = this.sound.add('GameOverMusic', gameOverConfig)
        this.gameOverMusic.play()
        
        //Game over background
        this.gameOverBackground = this.add.tileSprite(0, 0, 960, 580, 'GameOver').setOrigin(0, 0)

        //Game over title and restart title
        let playTitle = this.add.bitmapText(centerX, 100, 'gameover_font','PLAY AGAIN?, You had: ' + Math.round(this.timeLast) + ' seconds left to win!', 40).setOrigin(0.5)
        let restartTitle = this.add.bitmapText(centerX, 400, 'gameover_font','press UP to RESTART!', 62).setOrigin(0.5)

        //tweens
        let playagainTween = this.tweens.add({
            targets: playTitle,
            duration: 8000,
            angle: { from: -2, to: 2 },
            yoyo: true,
            repeat: -1,
            scale: {
                from: 1,
                to: 2
            }
        })
        playagainTween.on('yoyo', () => {this.cameras.main.shake(300, 0.0150)})

        let restartTween = this.tweens.add({
            targets: restartTitle,
            duration: 5000,
            angle: {
                from: 0, to: 0
            },
            tint: 0xDAFC00,
            yoyo: true,
            repeat: -1,
            //delay: 3000
        })
        //restartTween.on('yoyo', () => {this.cameras.main.f(300, 0.0200)})

        cursors = this.input.keyboard.createCursorKeys()

    }
    update()
    {
        //game over options
        if(Phaser.Input.Keyboard.JustDown(cursors.up))
        {
            this.sound.play('Whomp')
            this.menuDelay = this.time.delayedCall(2000, () => {
                console.log('Restart STARTED')
                this.scene.start('menuScene')
            })
        }
    }
}

