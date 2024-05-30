let Pregunta = 1
let Puntos = 0
basic.forever(function () {
    if (input.logoIsPressed()) {
        Pregunta = 1
        Puntos = 0
    }
    if (Pregunta == 1) {
        basic.showNumber(1)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
    }
    if (Pregunta == 2) {
        basic.showNumber(2)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
    }
    if (Pregunta == 3) {
        basic.showNumber(3)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
    }
    if (Pregunta == 4) {
        basic.showNumber(4)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
    }
    if (Pregunta == 5) {
        basic.showNumber(5)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
    }
    if (Pregunta == 6) {
        basic.showNumber(6)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
    }
    if (Pregunta == 7) {
        basic.showNumber(7)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
    }
    if (Pregunta == 8) {
        basic.showNumber(8)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
    }
    if (Pregunta == 9) {
        basic.showNumber(9)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
    }
    if (Pregunta == 10) {
        basic.showNumber(10)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            Puntos += 1
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.No)
            Pregunta += 1
        }
    }
    if (Pregunta == 11) {
        basic.showString("Puntos: " + Puntos)
    }
})
