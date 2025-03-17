input.onButtonPressed(Button.A, function () {
    Steg = 0
})
input.onGesture(Gesture.Shake, function () {
    Steg += 1
})
let Steg = 0
Steg = 0
basic.forever(function () {
    basic.showNumber(Steg)
    if (Steg < 10) {
        basic.showString("L")
    } else {
        basic.showString("W")
    }
})
