let acc_tot_sq = 0
let acc_z = 0
let acc_y = 0
let acc_x = 0
basic.forever(function () {
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    acc_z = input.acceleration(Dimension.Z)
    acc_tot_sq = acc_x ** 2 + acc_y ** 2 + acc_z ** 2
    if (acc_tot_sq > 1100000) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    }
})
