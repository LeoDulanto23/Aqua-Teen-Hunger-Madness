//Name: Leonardo Dulanto
//Title: Make the Fake playtestbuild for ATHM
//Hours Spent: 30+ hrs
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
    scene: [Load, Menu, Adultswim, Credit, Instruction, Talkone, Play]


}
let game = new Phaser.Game(config)
// define globals
let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height
const textSpacer = 64

let cursors

let keySPACE, keyRIGHT, keyLEFT, keyFIRE, KeyRESTART