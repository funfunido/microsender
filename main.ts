//  Base code made by Git-coder-plus
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    basic.showNumber(receivedNumber)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(1)
radio.setTransmitPower(1)
let clientId = 1
basic.showNumber(clientId)
basic.pause(2000)
basic.clearScreen()
basic.forever(function on_forever() {
    radio.sendNumber(clientId)
    basic.pause(200)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
})
