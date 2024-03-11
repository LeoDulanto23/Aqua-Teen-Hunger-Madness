class Frylock extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x=0, y=0, texture, frame=0)
    {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        // define custom properties
        this.WALK_VELOCITY = 75
        this.MAX_VELOCITY_X = 150
        this.MAX_VELOCITY_Y = 500
        this.ACCELERATION = 250 //walking???
        this.JUMP_VELOCITY = -350
        this.DRAG = 350

        this.body.setSize(this.width/2, this.height/2, false)
        this.body.setOffset(this.width/10, this.height/2)
        this.body.setCollideWorldBounds(true)
        this.body.setMaxVelocity(this.MAX_VELOCITY_X, this.MAX_VELOCITY_Y)
        
        this.body.setDragX(this.DRAG)


        this.isPunching = false
        this.moveSpeed = 3
    }
    update()
    {
        //left...?
        if(!this.isPunching)
        {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width)
            {
                this.x -= this.moveSpeed
            }else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width)
            {
                this.x += this.moveSpeed
            }
        }
    }
}