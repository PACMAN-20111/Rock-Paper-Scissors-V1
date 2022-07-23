let Hand = 0
input.onButtonPressed(Button.A, function () {
    led.setBrightness(50)
})
input.onButtonPressed(Button.AB, function () {
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(150)
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
