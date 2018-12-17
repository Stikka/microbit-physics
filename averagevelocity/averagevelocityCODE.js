let dt = 0
let t1 = 0
let t0 = 0
input.onPinPressed(TouchPin.P0, function () {
    t0 = control.eventTimestamp()
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    t1 = control.eventTimestamp()
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    dt = t1 - t0
    basic.showNumber(dt)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
