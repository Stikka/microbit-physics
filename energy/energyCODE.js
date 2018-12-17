let Highest = 0
let value = 0

basic.forever(() => {
    value = pins.analogReadPin(AnalogPin.P0)
    if (value > Highest) {
        Highest = value
    }
})

input.onButtonPressed(Button.A, () => {
    basic.showNumber(Highest)
})
