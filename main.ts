 // Base code made by Git-coder-plus

radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber);  // when a number ID is sent it will detect the number that was sent to it and display it.
    basic.pause(200); // pauses so you see the numebr for some time
    basic.clearScreen(); // clears screen (ofc)
})

radio.setGroup(1); // this is our radio group
radio.setTransmitPower(1); // we should make a setting to change the transmit power

let id = 1 // when we upload this code to the microbit use a unique ID

let letters: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let letterQueue = 0;
let mainLetter = letters[letterQueue];

basic.showNumber(id); // shows your id at the begenning
basic.pause(2000); // pauses for 2 secs
basic.clearScreen(); // clears screen

basic.forever(function () {
    radio.sendNumber(id); // constnatly sends id
    basic.pause(200); // pauses
})

// end of base code made by me git-coder plus

input.onButtonPressed(Button.A, function() {
    letterQueue = letterQueue - 1;
    if (letterQueue < 0) {
        letterQueue = 0;
    }
})
input.onButtonPressed(Button.B, function() {
    letterQueue = letterQueue + 1;
    if (letterQueue > 10) {
        letterQueue = 10;
    }
})
input.onPinPressed(TouchPin.P1, function() {
    
})


