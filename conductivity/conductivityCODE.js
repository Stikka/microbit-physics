basic.forever(() => {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
    }
    else {
        basic.showIcon(IconNames.Sad)
    }
})
