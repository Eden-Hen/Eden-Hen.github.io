# ChromoLCD Project - MIT Human Computer Interaction Engineering Lab

As an undergratuade researcher at the MIT Human Computer Interaction Engineering Lab, I worked on the ChromoLCD project.

Our goal was to create a high-resolution, portable, and low-energy light source system that could be used to reprogram the appearance of photochromatic surfaces.

Essentially, we were expanding upon a previous project called the [Photo-Chromeleon](https://hcie.csail.mit.edu/research/photochromeleon/photochromeleon.html). The Photo-Chromeleon developed a method of using photochromatic dyes to change the color of a material through exposure to UV light. We intended to find a way to make that same technology more efficient, more practical, and more precise.

Our solution (which has since been iterated upon) was the following design:

![](https://eden-hen.github.io/pages/ChromoLCD/chromolcd.png)

Using a Raspberry Pi, an ESP32, and an LCD taken from a 3D printer, we developed a working proof of concept, where the user would upload an image onto the LCD screen, and the backlight would shine the necessary UV and RGB light through the screen onto a photochromatic surface in order to change that surface's design.

Using an LCD screen allowed the finished design to have a much higher resolution, and it used a convenient backlight that could easily be moved around. The LCD screen we used was actually taken off of a resin 3D printer, since it needed to be able to let through UV light (which is typically blocked for safety reasons). By connecting a Raspberry Pi to the 3D printer control board, we were able to communicate with the LCD screen and upload images.

In addition to helping out with the hardware, I was mainly responsible for the programming aspect of this project. I created a GUI to allow the user to create or upload a desired image, and optimized the backend processes for converting a given image into exposure times that the UV backlight system could use.

I coded the GUI using Processing.js (a choice that I highly regret), which allowed a user to either draw a picture or upload an image (or draw on an uploaded image!).

![](https://eden-hen.github.io/pages/ChromoLCD/gui.png)

Once the user was satisfied with their image, they could then send off their creation to a Python script (using sockets!) that would perform the linear algebra required to get the proper exposure times and extract other relevant data, such as the corresponding red, green, and blue images.

![](https://eden-hen.github.io/pages/ChromoLCD/valueextraction.png)

This Python script had already been coded for a previous project, but I optimized it to be 10x faster (through the use of dictionaries and pre-calculated values).

Working on the ChromoLCD project also offered me my first real exposure into PCB design! While I wasn't responsible for the final project pictured below, I did use KiCad to start on the design for backlight, which needed RGB and UV modules to be closely connected.

![](https://eden-hen.github.io/pages/ChromoLCD/pcb.png)

Together, we managed to complete a working ChromoLCD system for reprogramming photochromatic surfaces!

![](https://eden-hen.github.io/pages/ChromoLCD/fullprocess.png)