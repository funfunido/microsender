# Base code made by Git-coder-plus

def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
    basic.pause(200)
    basic.clear_screen()
radio.on_received_number(on_received_number)

radio.set_group(1)
radio.set_transmit_power(1)
clientId = 1
basic.show_number(clientId)
basic.pause(2000)
basic.clear_screen()

def on_forever():
    radio.send_number(clientId)
    basic.pause(200)
basic.forever(on_forever)

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    pass
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
