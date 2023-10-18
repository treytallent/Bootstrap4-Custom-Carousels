const whatsOnCounter = document.querySelector(".carousel-counter")
const slideSum = whatsOnCounter.innerHTML.slice(2, 4)

$("#whatsOnCarousel").carousel({
   interval: false,
})

$("#whatsOnCarousel").on("slide.bs.carousel", function (from) {
   const slideIndex = from.to
   updateCounter2(slideIndex + 1)
})

function updateCounter2(slide) {
   whatsOnCounter.innerHTML = `${slide}/${slideSum}`
}

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
