class Load extends Phaser.Scene
{
    constructor()
    {
        super('loadScene')
    }
    preload()
    {
        //img
        this.load.path = "./assets/"
        this.load.image('Title', 'img/titleATHM.png')
        this.load.image('Frylock', 'img/Frylock.png')
        this.load.image('Adult', 'img/newleo.png')
        this.load.image('Swim', 'img/newnewSwim.png')
        this.load.image('Instruction', 'img/newInstruct.png')
        //audio
        this.load.audio('Intro', 'audio/Public Enemy - Lost at Birth - Karaoke - Instrumental & Lyrics.wav')
        this.load.audio('Button', 'audio/gtabutton.mp3')
        this.load.audio('Preroll', 'audio/Adult Swim - Hulu preroll.mp3')
        this.load.audio('Beep', 'audio/gta-notification-sound.mp3')
        //text
        this.load.bitmapFont('aqua_font', 'font/AquaTeen.png', 'font/AquaTeen.xml')
        //json
        this.load.json('Talkone', 'json/talkone.json')
        //imgtalk
        this.load.image('frylocktalk', 'img/frylockTalk.png')
        this.load.image('ultrafrylock', 'img/ultrafrylock.png')
    }
    create()
    {
        this.scene.start('menuScene')
        console.log('title screen started...')
    }
}
