document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      type: "loop",
      perMove: 1,
      perPage: 3,
      gap: "2%",
      speed: 800,
      easing: "cubic-bezier(.22,.48,.23,.92)",
      //fixedWidth : '20rem',
      pagination: true,
      breakpoints: {
        991: {
          perPage: 2,
          padding: { right: "10%" }
        },
        // Webflow Max Width { 478px - 767px }
        767: {
          perPage: 1,
          padding: { right: "10%" }
        },
        // Webflow Max Width { 0 - 476px }
        477: {
          perPage: 1,
          padding: { right: "10%" }
        }
      },
      focus: 1,
      classes: {
        prev: "splide__arrow--prev",
        next: "splide__arrow--next",
        pagination: "splide__pagination",
        page: "splide__pagination__page is-outlined"
      }
    });
    splide.mount();
  });  