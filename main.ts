input.onButtonPressed(Button.A, function () {
    music.playMelody("A C5 B C5 B B A G ", input.temperature())
    basic.showIcon(IconNames.Silly)
    basic.showString("Bleh")
    basic.showIcon(IconNames.Asleep)
})
input.onSound(DetectedSound.Loud, function () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.OnceInBackground)
    basic.showIcon(IconNames.Skull)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
