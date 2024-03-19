class Platform extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setImmovable()
        this.moveSpeed = game.settings.platformSpeed
        this.newPlatform = false
    }
    update()
    {
        this.x -= this.moveSpeed
        if(this.x <= 0 - this.width)
        {
            this.x = Phaser.Math.Between(50, 950)
            this.y = Phaser.Math.Between(50, 350)
        }
    }
    reset()
    {
        this.x = game.config.width
    }
}