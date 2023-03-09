input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F D G E E ", 103)
    basic.showIcon(IconNames.Silly)
    basic.showString("Bleh")
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.OnceInBackground)
    basic.showIcon(IconNames.Skull)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
