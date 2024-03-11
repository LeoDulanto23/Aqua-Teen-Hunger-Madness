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
        this.load.image('House', 'img/aquaHouse.png')
        this.load.image('Platform', 'img/aquaPlatform.png')
        //audio
        this.load.audio('Intro', 'audio/Public Enemy - Lost at Birth - Karaoke - Instrumental & Lyrics.wav')
        this.load.audio('talkmusic', 'audio/DevonAvenue.mp3')
        this.load.audio('Instrumusic','audio/MacPlus.mp3')
        this.load.audio('Button', 'audio/gtabutton.mp3')
        this.load.audio('Preroll', 'audio/Adult Swim - Hulu preroll.mp3')
        this.load.audio('Beep', 'audio/gta-notification-sound.mp3')
        this.load.audio('Bruh', 'audio/bruh-sound-effect_WstdzdM.mp3')
        this.load.audio('Click', 'audio/redbutton.wav')
        //text
        this.load.bitmapFont('aqua_font', 'font/AquaTeen.png', 'font/AquaTeen.xml')
        //json
        this.load.json('Talkone', 'json/talkone.json')
        //imgtalk
        this.load.image('talkbox', 'img/supertalkonebox.png')
        this.load.image('frylocktalk', 'img/frylockTalk.png')
        this.load.image('ultrafrylock', 'img/superFrylock.png')
        this.load.image('ultrashake', 'img/superShake.png')
        this.load.image('ultraray', 'img/ultrashrink.png')
    }
    create()
    {
        this.scene.start('menuScene')
        console.log('title screen started...')
    }
}
