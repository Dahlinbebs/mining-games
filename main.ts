namespace SpriteKind {
    export const Diamant = SpriteKind.create()
    export const Jern = SpriteKind.create()
    export const guld = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -175
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jern, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Diamant, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(5)
})
info.onCountdownEnd(function () {
    if (info.highScore() == 50) {
        game.gameOver(true)
    } else {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.guld, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
let guldType: Sprite = null
let jernType: Sprite = null
let diamantType: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . e e e e . . . . . 
    . . . . . . e e e e e e . 2 . . 
    . . . . . 2 2 2 2 2 2 2 2 . . . 
    . . . . e e d d d d d d e 2 . . 
    . . . . e e d 6 d d 6 d e e . . 
    . . . . . d d d d d d d d . . . 
    . . . . . d d f d d f d d . . . 
    . . . . . . d d f f d d . . . . 
    . . . . . . . d d d d . . . . . 
    . . . 8 8 8 8 b 8 8 b 8 8 8 8 . 
    . . . 8 8 8 8 b 8 8 b 8 8 8 8 . 
    . . . d d . 8 b 8 8 b 8 . d d e 
    . . . d d . 8 b 8 8 b 8 . d e e 
    . . . . . . 8 b 8 8 b 8 . e e . 
    . . . . . . b b b b b b . . . . 
    . . . . . . 6 6 . . 6 6 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
scene.cameraFollowSprite(mySprite)
mySprite.ay = 300
info.setScore(0)
info.startCountdown(60)
for (let index = 0; index < 20; index++) {
    diamantType = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 9 9 6 1 1 9 9 9 9 . . . 
        . . 9 9 6 6 6 9 9 9 9 9 9 9 . . 
        . 9 9 6 1 1 1 9 9 9 9 9 9 9 9 9 
        9 9 6 6 1 9 9 9 9 9 9 1 9 6 1 9 
        9 9 9 1 1 9 9 9 9 9 9 1 1 6 1 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . 9 9 9 1 9 9 9 9 9 9 9 9 9 . 
        . . . 9 9 9 1 1 1 9 6 6 9 9 . . 
        . . . . 9 9 6 6 1 6 6 9 9 . . . 
        . . . . . 9 9 9 6 9 9 . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        `, SpriteKind.Diamant)
    tiles.placeOnRandomTile(diamantType, assets.tile`myTile`)
    jernType = sprites.create(img`
        ........................
        .........bbbb...........
        ........bbbbbbbbb.......
        ....bbbf666bbbb9bb......
        ..bffffb6bbbbbbb999.....
        ..bfbb666bbbbbbbfff9....
        ..bbbbbbbbbbbbbbbbff....
        ...bbbbbbbbbbbbbbbbffbb.
        ...bbbbffffbbbbbbbb66bb.
        .....bb99bfffbbbbbb666b.
        ......bbb999ffbbbffffb..
        .........bbb9bbbb99bf...
        .............bb999b.....
        ........................
        ........................
        ........................
        `, SpriteKind.Jern)
    tiles.placeOnRandomTile(jernType, assets.tile`myTile`)
    guldType = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 f 4 4 4 5 5 . . . . . 
        . 5 5 5 5 5 f 5 1 4 5 5 . . . . 
        . . 5 5 5 5 5 5 5 f 4 5 . . . . 
        . . 5 5 5 5 4 4 5 5 4 4 5 . . . 
        . . . 5 4 4 5 f 4 5 5 5 5 . . . 
        . . . . . 5 1 1 4 4 1 1 5 . . . 
        . . . . . . 5 5 1 1 f 5 5 . . . 
        . . . . . . . . 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.guld)
    tiles.placeOnRandomTile(guldType, assets.tile`myTile`)
}
