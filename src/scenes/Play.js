class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene')
    }
    create()
    {
        this.playBackground = this.add.tileSprite(0, 0, 960, 580, 'House').setOrigin(0, 0)
        this.platformOne = new Platform(this, 20, game.config.height / 3*2, 'Platform').setOrigin(0, 0)
        this.setImmovable(true)
    }
    update()
    {
        this.platformOne.update()
        this.playBackground.tilePositionX +=2

    }
}
