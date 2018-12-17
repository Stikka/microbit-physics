let period = 0
let elapsedTime = 0
let endTime = 0
let startTime = 0
let lightLevel = 0
let cycles = 0
let zeroCrossings = 0
let count = 0
let backgroundLightLevel = 0
basic.forever(function () {
    backgroundLightLevel = input.lightLevel()
    while (!(input.buttonIsPressed(Button.A))) {
        basic.pause(100)
    }
    basic.showString("Kreni")
    backgroundLightLevel = input.lightLevel()
    count = 0
    zeroCrossings = 10
    cycles = Math.idiv(zeroCrossings, 2)
    lightLevel = 0
    startTime = 0
    while (count <= zeroCrossings) {
        lightLevel = input.lightLevel()
        if (lightLevel > backgroundLightLevel + 50) {
            if (startTime == 0) {
                startTime = input.runningTime()
            }
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(300)
            basic.clearScreen()
            count += 1
        }
    }
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
    period = Math.idiv(elapsedTime, cycles)
    basic.showString("==")
    basic.showNumber(period)
    basic.showString(" ms")
})
