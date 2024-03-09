class Credit extends Phaser.Scene
{
    constructor()
    {
        super('creditScene')
    }
    create()
    {
        this.add.bitmapText(500, centerY/6, 'aqua_font', 'CREDITS', 55).setOrigin(0.5).setTint(0xFDDC36)
        this.add.bitmapText(460, centerY /3, 'aqua_font', 'Final Project: AT HUNGER MADNESS', 42).setOrigin(0.5)
        this.add.bitmapText(420, centerY/2, 'aqua_font', 'Class: CMPM120 w/ Nathan Altice' , 42).setOrigin(0.5)
        this.add.bitmapText(230, 200, 'aqua_font','Hours spent: 200+', 42).setOrigin(0.5)
        this.add.bitmapText(205, 250, 'aqua_font', 'Design by: Me :)', 42).setOrigin(0.5)
        this.add.bitmapText(400, 300, 'aqua_font', 'Programming by: Big Leo (Me) :)', 42).setOrigin(0.5)
        this.add.bitmapText(430, 350, 'aqua_font', 'Music by: Public Enemy, JDilla, Nujabes, etc ...', 30).setOrigin(0.5)

        cursors = this.input.keyboard.createCursorKeys()

    }
    update()
    {
        if(Phaser.Input.Keyboard.JustDown(cursors.space))
        {
            this.sound.play('Beep')
            this.scene.start('instructionScene')
        }
    }
}