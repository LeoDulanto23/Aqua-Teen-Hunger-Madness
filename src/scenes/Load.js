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
        this.load.image('Instruction', 'img/superduperInstruct.png')
        this.load.image('House', 'img/aquaHouse.png')
        this.load.image('Platform', 'img/skinnyplatformUno.png')
        this.load.image('GameOver', 'img/Game Over.png')
        this.load.image('PlatformTwo', 'img/skinnyplatformDos.png')
        this.load.image('platformThree', 'img/skinnysuperplatformTres.png')
        this.load.image('dynamite', 'img/dynamite sprite uno.png')
        this.load.image('Youwin', 'img/youWinBruh.png')
        this.load.image('Livingroom', 'img/livingRoom.png')
        //audio
        this.load.audio('Intro', 'audio/Public Enemy - Lost at Birth - Karaoke - Instrumental & Lyrics.wav')
        this.load.audio('talkmusic', 'audio/DevonAvenue.mp3')
        this.load.audio('Instrumusic','audio/MacPlus.mp3')
        this.load.audio('Everybody', 'audio/blackbox.mp3')
        this.load.audio('Button', 'audio/gtabutton.mp3')
        this.load.audio('Preroll', 'audio/Adult Swim - Hulu preroll.mp3')
        this.load.audio('Beep', 'audio/gta-notification-sound.mp3')
        this.load.audio('Bruh', 'audio/bruh-sound-effect_WstdzdM.mp3')
        this.load.audio('Click', 'audio/redButton.wav')
        this.load.audio('Punch', 'audio/punch.mp3')
        this.load.audio('GameOverMusic', 'audio/Game Over Yeah!.mp3')
        this.load.audio('Whomp', 'audio/WHOMP Sound Effect - Super Mario 64.mp3')
        this.load.audio('Bigfun', 'audio/innercity.mp3')
        this.load.audio('Wchat', 'audio/drake ws in the shat.mp3')
        this.load.audio('returnMac', 'audio/returnOfMac.wav')
        //text
        this.load.bitmapFont('aqua_font', 'font/AquaTeen.png', 'font/AquaTeen.xml')
        this.load.bitmapFont('gameover_font','font/GameOver.png', 'font/GameOver.xml')
        //json
        this.load.json('Talkone', 'json/talkone.json')
        //imgtalk
        this.load.image('talkbox', 'img/supertalkonebox.png')
        this.load.image('frylocktalk', 'img/frylockTalk.png')
        this.load.image('ultrafrylock', 'img/superFrylock.png')
        this.load.image('ultrashake', 'img/superShake.png')
        this.load.image('ultraray', 'img/ultrashrink.png')
        this.load.image('ultrawad', 'img/smollMeatwad.png')
        this.load.image('madfrylock', 'img/heatFrylock.png')
        //frylock
        this.load.spritesheet('frylock', 'img/Frylock Sheet Cinco.png',{
            frameWidth: 100,
            frameHeight: 131,
            startFrame: 0, 
            endFrame: 3
        })
    }
    create()
    {
        // animation definitions
        this.anims.create({
            key: 'idle',
            frameRate: 20,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('frylock', {start:0, end: 1, first: 0})
        })

        this.anims.create({
            key: 'walk',
            frameRate: 21,
            //repeat: -1,
            frames: this.anims.generateFrameNumbers('frylock', {start:0, end: 3, first: 0})
        })
        /*this.anims.create({
            key: 'frylock-punch',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('frylock', {frames:[4,7]}),
        })
        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('frylock', {frames:[8,11]}),
        })
        this.anims.create({
            key: 'frypunch-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('frylock', {frames:[12, 15]}),
        })*/

        this.scene.start('menuScene')
        console.log('Keys has been activated...')
        console.log('title screen started...')
    }
}
