let start = 0
let end = 0
let false_start = false
let running = false
input.onButtonPressed(Button.B, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showNumber(end - start)
        basic.showString(" ms")
    } else {
        false_start = true
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    running = false
    false_start = false
    basic.pause(1000 + Math.randomRange(0, 1999))
    if (!(false_start)) {
        start = input.runningTime()
        running = true
        led.stopAnimation()
        basic.clearScreen()
        led.plot(Math.randomRange(0, 4), Math.randomRange(0, 4))
    }
})
running = false
false_start = false
end = 0
start = 0
