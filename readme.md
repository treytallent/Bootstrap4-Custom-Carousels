Live preview https://subtle-elf-f0dcbc.netlify.app

## Setup

HTML head must follow the same format as index.html i.e Bootstrap then TinySlider then custom CSS and JS

## Image Classes

1. For images to fit a 1/1 aspect ratio apply the class 'ar1'
2. For images to fill the available container apply the class 'object-fit-cover'
   note: this will crop the image to the center, if you want to move the crop to the top of the image then apply the 'object-position-top' class too

## What's On Exhibit Carousel

The carousel controls and the slides must be wrapped inside of a parent containing the class 'carousel' and the id 'whatsOnCarousel'
All carousel items must be wrapped inside of a parent containing the 'carousel-inner' class
All carousel items must contain a 'data-slide' attribute that's value is set to it's slide number
All carousel items must contain the 'carousel-item' class in order to work
The first carousel item must contain the 'active' class

Besides these classes, all other classes and their properties changed without breaking the carousel functionality

## Academics Carousel

The carousel slides must be wrapped inside of a parent containing the class 'academics-carousel'

This is the only class necessary for the carousel to work, the gutters and the quantity of carousel items displayed per breakpoint are controlled in 'script.js' inside the 'Academics Carousel' section
