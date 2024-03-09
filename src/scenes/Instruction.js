class Instruction extends Phaser.Scene
{
    constructor()
    {
        super('instructionScene')
    }
    create()
    {
        let Instructional = this.add.tileSprite(0, 0,960, 580, 'Instruction').setOrigin(0, 0)
        console.log('Instructions has started...')

        let instructTweens = this.tweens.add({
            targets: Instructional,
            duration: 5000,
            angle: 0,
            yoyo: true,
            repeat: -1
        })
        instructTweens.on('yoyo', () => {this.cameras.main.flash(200, 0.0100), 
            this.cameras.main.shake(200, 0.0400)
        })

        cursors = this.input.keyboard.createCursorKeys()
    }
    update()
    {
        if(Phaser.Input.Keyboard.JustDown(cursors.space))
        {
            this.sound.play('Beep')
            this.scene.start('talkoneScene')

        }
    }
}
