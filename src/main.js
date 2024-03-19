//Name: Leonardo Dulanto
//Title: Make the Fake Finished game: Aqua Teen Hunger Madness
//Hours Spent: 30+ hrs
//5 Phaser major components: Timers, Tween managers, animation managers, text objects, cameras
//Comments: For the most part ATHM is a timer based endless runner, that I adapted in a previous project. I really 
//put more visual design approaches and funny references with simple game mechanics in order to create a more 
//arcade-like and addicting game like Flappy Birds mixed with Geometry Dash. Take a look! I put some effort into it lol!
//Date: 3/5/24

"use strict" //keep me honest...

const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 580,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    },
    scene: [Load, Menu, Adultswim, Credit, Instruction, Talkone, Play, Gameover, Win]


}
let game = new Phaser.Game(config)
// define globals
let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height
const textSpacer = 64


let cursors

let keySPACE, keyUP, keyR