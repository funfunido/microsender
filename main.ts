// Base code made by Git-coder-plus

radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(200)
    basic.clearScreen()
})

radio.setGroup(1)
radio.setTransmitPower(1)

let id = 1

basic.showNumber(id)
basic.pause(2000)
basic.clearScreen()

basic.forever(function () {
    radio.sendNumber(id)
    basic.pause(200)
})

let senderID = 2; 
radio.setGroup(1);

input.onButtonPressed(Button.A, function () {

})

input.onButtonPressed(Button.B, function () {

})

input.onPinPressed(TouchPin.P1, function() {
    
})
