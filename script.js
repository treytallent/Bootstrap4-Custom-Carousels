// Whats On Carousel JS

const whatsOnCounter = document.querySelector(".carousel-counter")
//Returns the total slide index that is manually defined in HTML
const slideSum = whatsOnCounter.innerHTML.slice(2, 4)

// Disables automatic slide intervals
$("#whatsOnCarousel").carousel({
   interval: false,
})

$("#whatsOnCarousel").on("slide.bs.carousel", function (from) {
   // Event listener on the carousel returns the current slide index every time the slide is changed
   const slideIndex = from.to
   //1 is added to the slide index so it starts from 1 rather than 0 then passed to the updateCounter function
   updateCounter(slideIndex + 1)
})

function updateCounter(index) {
   //Updates the counter text every time the function is called
   //Updates the counter text using he slide index that is passed from the carousel event listener, a separating '/' and  the static slide sum defined in the HTML
   whatsOnCounter.innerHTML = `${index}/${slideSum}`
}

// Academics Carousel
// Configuration options can be found here https://github.com/ganlanyuan/tiny-slider

const slider = tns({
   container: ".academics-carousel",
   slideBy: "page",
   items: 1.5,
   controls: false,
   gutter: 16,
   nav: false,
   autoplay: false,
   arrowKeys: true,
   mouseDrag: true,
   preventScrollOnTouch: "auto",
   responsive: {
      768: {
         items: 2.5,
      },
   },
})
