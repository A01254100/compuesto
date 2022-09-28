let Luz = 0
let Temp = 0
basic.forever(function () {
    Luz = input.lightLevel()
    Temp = input.temperature()
    if (Luz >= 130 || Temp >= 30) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
