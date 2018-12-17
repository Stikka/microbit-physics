let magnet = 0
basic.forever(function () {
    magnet = input.magneticForce(Dimension.Strength)
    led.plotBarGraph(
    magnet * 3,
    1023
    )
})
