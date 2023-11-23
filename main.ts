input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 214), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
