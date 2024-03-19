let gameSettings = 
{
    platformStartSpeed: 350,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 1500,
    jumpForce: 1000,
    playerStartPosition: 200,
    jumps: 2
}
class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene')
    }
    create()
    {
        let scene = this

        console.log('Play scene activated...')

        //Play music
        let playmusicConfig = {
            rate: 1,
            volume: 0.8,
            loop: true
        }
        this.playMuzak = this.sound.add('Everybody', playmusicConfig)
        this.playMuzak.play()

        let halftimeConfig = {
            rate: 1,
            volume: 0.8,
            loop: true
        }
        this.playhalfMuzak = this.sound.add('Bigfun', halftimeConfig)


        this.playBackground = this.add.tileSprite(0, 0, 960, 580, 'House').setOrigin(0, 0)

        //survive text
        /*this.surviveDelay = this.time.delayedCall(2000,() => {
            let survivetitle = this.add.bitmapText(centerX, centerY + textSpacer * 4, 'aqua_font', 'SURVIVE TILL TIMES UP!', 55).setOrigin(0.5).setTint(0xFFE613)
        })*/
        let survivetitle = this.add.bitmapText(centerX, centerY + textSpacer * 4, 'aqua_font', 'SURVIVE TILL TIMES UP!', 55).setOrigin(0.5).setTint(0xFFE613)

        let surviveTween = this.tweens.add({
            targets: survivetitle,
            duration: 7000,
            angle: {
                from: 0, to: 0
            },
            yoyo: true,
            tint: 0x13FF25,
            repeat: -1,
            //delay: 2000
        })
        surviveTween.on('yoyo', () => {this.cameras.main.shake(200, 0.0150)})

        

        //start plat...
        this.platformOne = new Platform(this, 50,  385, 'Platform').setOrigin(0, 0)
        this.platformOne.setImmovable(true)
        
        //Other Platforms...
        this.platformTwo = new Platform(this,  600,  Phaser.Math.Between(300, 360), 'PlatformTwo').setOrigin(0, 0)
        this.platformTwo.setImmovable(true)
        this.platformThree = new Platform(this,  100,  Phaser.Math.Between(400, 560), 'platformThree').setOrigin(0,0)
        this.platformThree.setImmovable(true)


        //Player Frylock
        this.fryLock = this.physics.add.sprite( 60, 250, 'frylock').setScale(1)
        this.fryLock.setGravityY(gameSettings.playerGravity)


        //colliders
        this.physics.add.collider(this.platformOne, this.fryLock)
        this.physics.add.collider(this.platformTwo, this.fryLock)
        this.physics.add.collider(this.platformThree, this.fryLock)
        this.physics.add.collider(this.platformOne, this.fryLock)

        //Jump sound
        this.jump = this.sound.add('Punch')

        //define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        //keep track of player jump count
        this.fryLockJumps = 0

        //Time remaining in game over
        this.timeLast = 0

        // GAME OVER flag
        this.gameOver = false

        // 60-second play clock
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            console.log('Win scene is here...')
            this.scene.start('winScene')
            this.gameOver = true
            this.playMuzak.stop()
            this.playhalfMuzak.stop()
        }, null, this)

        //real-time remaining time of clock
        this.clockTimeRemain = Math.ceil(this.clock.getRemainingSeconds())

        //clock time left text creation
        this.clockTimeLeft = this.add.bitmapText(centerX, centerY / 6, 'aqua_font','Time: ' + this.clockTimeRemain, 75).setOrigin(0.5)



    }
    update()
    {
        this.clockTimeLeft.text = 'Time: ' + Math.ceil(this.clock.getRemainingSeconds())
        
        this.currentClockTime = Math.ceil(this.clock.getRemaining())

        this.currentMusicStopTime = this.clockTimeRemain

        //Big fun song counter
        if(this.currentClockTime >= 49000)
        {
            this.playDelay = this.time.delayedCall(1500, () => {
                this.playhalfMuzak.play()
            })
        }else{
            this.playMuzak.stop()
        }
        
        this.platformOne.update()
        this.platformTwo.update()
        this.platformThree.update()


        if(this.fryLock.body.touching.down)
        {
            this.fryLockJumps = 0
            this.fryLock.anims.play('walk', true)
            if(Phaser.Input.Keyboard.JustDown(keySPACE))
            {
                this.sound.play('Punch')
                this.fryLock.setVelocityY(gameSettings.jumpForce*-1)
                this.fryLockJumps++

            }
        }
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && !this.fryLock.body.touching.down)
        {
            this.fryLock.anims.play('idle', true)
            if(this.fryLockJumps >= 0 && this.fryLockJumps < gameSettings.jumps)
            {
                this.sound.play('Punch')
                this.fryLock.setVelocityY(gameSettings.jumpForce*-1)
                this.fryLockJumps++
            }
        }
        //play background scrolling
        this.playBackground.tilePositionX +=1

        //Game over scene
        if(this.fryLock.y >= 580) //|| this.playerHealth == 0
        {
            this.playMuzak.stop()
            this.playhalfMuzak.stop()
            console.log('enter GAME OVER')
            this.scene.start('gameoverScene', {timeLast: this.timeLast}) //{score: this.score, totalSams: this.totalSams}
        }

        this.platSpeed = this.game.settings.platformSpeed

        //Platform time speed increase 
        if(this.currentClockTime <= 79000)
        {
            this.platformOne.x -= this.platSpeed * 3
        }
        if(this.currentClockTime <= 55000)
        {
            this.platformTwo.x -= this.platSpeed * 6
        }
        if(this.currentClockTime <= 29000)
        {
            this.platformThree.x -= this.platSpeed * 9
            //this.ship03.x -= this.shipSpeed
        }

        //Time remaining calculations
        if(this.timeLast <= this.currentClockTime)
        {
            this.timeLast = this.currentClockTime / 1000
        }
    }
}
