// Base code made by Git-coder-plus

radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)  // when a number ID is sent it will detect the number that was sent to it and display it.
    basic.pause(200) // pauses so you see the numebr for some time
    basic.clearScreen() // clears screen (ofc)
})

radio.setGroup(1) // this is our radio group
radio.setTransmitPower(1) // we should make a setting to change the transmit power

let id = 1 // when we upload this code to the microbit use a unique ID

basic.showNumber(id) // shows your id at the begenning
basic.pause(2000) // pauses for 2 secs
basic.clearScreen() // clears screen

basic.forever(function () {
    radio.sendNumber(id) // constnatly sends id
    basic.pause(200) // pauses
})

// end of base code made by me git-coder plus
let senderID = 2; 
radio.setGroup(1);

input.onButtonPressed(Button.A, function () {

})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
})


