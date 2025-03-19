# Electronics and Circuits Labs!

This page will be regularly updated with a variety of different electronics and circuits labs that I have completed. Currently, most of these have been completed as a part of my Electronics and Circuits class (6.2000). Enjoy!

Update #1: Because I am a student with a lot of work, this page will be a little outdated, but I'll do my best to update whenever I have a semblance of free time.

## Project #1: Gamepad Controller

![](https://eden-hen.github.io/pages/EELabs/eelabs.jpg)

This lab was mainly focused on soldering and using an oscilloscope. Given a variety of components, we were tasked with soldering them together and carefully analyzing the outputs of oscilloscope readings in order to ensure the correctness of our gamepads.

![](https://eden-hen.github.io/pages/EELabs/gamepadbegin.jpg)

![](https://eden-hen.github.io/pages/EELabs/gamepadcheck.jpg)

This lab wasn't as technically challenging as the following ones, but it was a lot of fun, allowing me to walk away with a working gamepad controller.

![](https://eden-hen.github.io/pages/EELabs/finalgamepad.mp4)



## Project #2: Digital-to-Analog Converter

As a more technical challenge, building a digital-to-analog converter required us to find an arrangement of components that could allow us to get analog voltages out of a Teensy 4.0, even though the pins could only be set to digital values (i.e. either 3.3 V (high) or 0 V (low)).

By connecting resistors and pin voltage sources in parallel with one another, we were able to construct a digital-to-analog converter that produced a range of values.

![](https://eden-hen.github.io/pages/EELabs/dac.jpg)

Enough values, even, to then connect a speaker and be able to play a song on the Teensy! After using a MOSFET to amplify the audio, I was able to play whatever music I liked.



## Project #3: Capacitive Touch Sensor

For the capacative touch sensor, the goal was to use a Teensy 4.0 to essentially allow a human to act as a capacitor in order to turn on different LEDs.

I was able to accomplish this by having the Teensy generate a fast square wave that oscillates between 3.3 V and 0 V. After connecting a 100k ohm resistor and then checking with an oscilloscope that the circuit worked with a normal capacitor, I was able to quickly prototype a version using only a wire and a human as a capacitor.

![](https://eden-hen.github.io/pages/EELabs/touchwire.mp4)

Once I verified that the ciruit worked, I was able to scale it up into a  slighter bigger (and more exciting) touch sensor!

![](https://eden-hen.github.io/pages/EELabs/touchcapacitor.mp4)