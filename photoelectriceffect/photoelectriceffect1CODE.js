let lightVal = 0
basic.forever(function () {
    lightVal = input.lightLevel()
    led.plotBarGraph(
        lightVal,
        255
    )
})
