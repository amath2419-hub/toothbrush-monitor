let change_in_mg = 0
let mg = 0
let strokes_per_point = 50
let score = 0
let count = 0
let old_mg = 0
basic.showNumber(score)
basic.forever(function () {
    mg = input.acceleration(Dimension.Strength)
    change_in_mg = mg - old_mg
    old_mg = mg
    if (change_in_mg > 800) {
        count += 1
        if (count > strokes_per_point) {
            score += 1
            basic.showNumber(score)
            count = 0
            if (score > 9) {
                basic.showIcon(IconNames.Happy)
            }
        }
    }
})
