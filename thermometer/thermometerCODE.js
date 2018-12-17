let f = 0
let k = 0
let c = 0
let d = 0
let displayBusy = false
input.onButtonPressed(Button.A, function () {
    displayBusy = true
    basic.showNumber(input.temperature())
    basic.showString(" C")
    basic.pause(1000)
    displayBusy = false
})
input.onButtonPressed(Button.AB, function () {
    displayBusy = true
    d = input.temperature()
    k = d + Math.idiv(5463, 20)
    basic.showNumber(k)
    basic.showString(" K")
    basic.pause(1000)
    displayBusy = false
})
input.onButtonPressed(Button.B, function () {
    displayBusy = true
    c = input.temperature()
    f = Math.idiv(c * 9, 5) + 32
    basic.showNumber(f)
    basic.showString(" F")
    basic.pause(1000)
    displayBusy = false
})
basic.forever(function () {
    if (displayBusy == false) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
})
