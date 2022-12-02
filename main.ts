radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(Math.map(input.lightLevel(), 0, 255, 0, 180))
})
