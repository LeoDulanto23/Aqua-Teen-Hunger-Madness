/*let gameSettings = 
{
    platformStartSpeed: 350,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 1500,
    jumpForce: 1000,
    playerStartPosition: 200,
    jumps: 2
}*/
class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene')
    }
    create()
    {
        this.playBackground = this.add.tileSprite(0, 0, 960, 580, 'House').setOrigin(0, 0)
        this.platformOne = new Platform(this, 0, 485, 'Platform').setOrigin(0, 0)
        this.platformOne.setImmovable(true)

        this.fryLock = new Frylock(this, 0, 440, 'ultrafrylock').setScale(1)
        //this.frylock.setGravityY(gameSettings.playerGravity)


        //colliders
        this.physics.add.collider(this.platformOne, this.frylock)

        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        //???????

        // GAME OVER flag
        this.gameOver = false
    }
    update()
    {
        if(!this.gameOver)
        {
            //this.frylock.update()
            this.platformOne.update()
        }
        /*if(this.frylock.body.touching.down)
        {
            this.frylockJumps = 0
            //this.mfDoom.anims.play('Mfwalk', true)
            if(Phaser.Input.Keyboard.JustDown(keyLEFT))
            {
                //this.sound.play('mfJump')
                this.frylock.setVelocityY(gameSettings.jumpForce*-1)
                this.frylockJumps++

            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyLEFT) && !this.mfDoom.body.touching.down)
        {
            if(this.frylockJumps >= 0 && this.frylockJumps < gameSettings.jumps)
            {
                //this.sound.play('mfJump')
                this.frylock.setVelocityY(gameSettings.jumpForce*-1)
                this.frylockJumps++
            }
        }*/
        this.playBackground.tilePositionX +=1

    }
}
