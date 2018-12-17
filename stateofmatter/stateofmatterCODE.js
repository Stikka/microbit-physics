let C = 0
let B = 0
let A = 0
input.onGesture(Gesture.Shake, function () {
    if (A == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        A = 0
    } else if (B == 1) {
        basic.showLeds(`
            . . # . #
            # # . # .
            . . # . #
            . # . # .
            # . # . .
            `)
        B = 0
    } else if (C == 1) {
        basic.showLeds(`
            . # . # .
            # . . . .
            . . . . #
            . # . # .
            . . # . .
            `)
        C = 0
    }
})
input.onButtonPressed(Button.A, function () {
    A = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    B = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    C = 1
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
})
