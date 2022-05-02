// Play beats
const tingGanIn = document.querySelector("#tingGanIn");
let isPlaying = false;

function togglePlay() {
  tingGanIn.volume = 0;
  const fadeAudio = setInterval(() => {
    tingGanIn.volume += 0.02;

    if (tingGanIn.volume > 0.4) {
      clearInterval(fadeAudio);
    }
  }, 100);

  tingGanIn.currentTime = 1.5; // this always resets the song back to 1.5s in
  isPlaying ? tingGanIn.pause() : tingGanIn.play();

  tingGanIn.onplaying = function () {
    isPlaying = true;
  };
  tingGanIn.onpause = function () {
    isPlaying = false;
  };
}

// Airbnb button hover effect
document.querySelector(".primary-btn").onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty("--x", `${x}px`);
  e.target.style.setProperty("--y", `${y}px`);
};

document.querySelector(".contact-btn").onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty("--x", `${x}px`);
  e.target.style.setProperty("--y", `${y}px`);
};

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader-finished");
});

// GSAP
gsap.from(".container__hero-text__left", {
  duration: 3,
  x: "-100%",
  opacity: 0,
  ease: "expo.out",
});

gsap.from(".container__hero-text__right", {
  duration: 3,
  x: "-10%",
  opacity: 0,
  delay: 1,
  ease: "expo.out",
});

gsap.from(".works__card h3", {
  scrollTrigger: {
    trigger: ".works__card",
    // scrub: 1,
    // markers: true,
    start: "top bottom", // [trigger] [scroller] positions
  },
  duration: 2,
  x: "-5%",
  opacity: 0,
  stagger: 0.1,
  ease: "expo.out",
});

gsap.from(".works__card p", {
  scrollTrigger: {
    trigger: ".works__card",
    // scrub: 1,
    start: "top bottom",
  },
  duration: 1,
  x: "-5%",
  opacity: 0,
  stagger: 0.1,
  ease: "expo.out",
});

gsap.from(".song-services", {
  scrollTrigger: {
    trigger: ".song-services",
    scrub: 1, // makes it animate the next time around again
    start: "center bottom",
  },
  duration: 1,
  x: "-5%",
  opacity: 0,
  stagger: 0.1,
  ease: "expo.out",
});

gsap.from(".project-launching", {
  scrollTrigger: {
    trigger: ".project-launching",
    scrub: 1, // makes it animate the next time around again
    start: "center bottom",
  },
  duration: 1,
  x: "5%",
  opacity: 0,
  stagger: 0.1,
  ease: "expo.out",
});

gsap.from(".about__animation", {
  scrollTrigger: {
    trigger: ".container__about__content",
    scrub: 1, // makes it animate the next time around again
    start: "top bottom",
  },
  duration: 3,
  x: "-10%",
  opacity: 0,
  stagger: 0.1,
  ease: "expo.out",
});

gsap.from("#canvasMolecularImage", {
  scrollTrigger: {
    trigger: ".container__about__content",
    scrub: 1, // makes it animate the next time around again
    start: "top bottom",
  },
  x: "10%",
  // opacity: 0,
  stagger: 0.1,
  ease: "expo.out",
});

// gsap.fromTo(
//   ".contact-img",
//   {
//     opacity: 0,
//     rotation: 720,
//   },
//   {
//     duration: 2,
//     delay: 1.5,
//     opacity: 1,
//     rotation: 0,
//   }
// );

// const timeline = gsap.timeline({ defaults: { duration: 1 } });
// timeline
//   .from(".our-logo", { opacity: 0, ease: "expo.out" })
//   .from(".our-logo", { opacity: 0, ease: "expo.out" })
//   .from(".our-logo", { opacity: 0, ease: "expo.out" })
//   .from(".our-logo", { opacity: 0, ease: "expo.out" });

// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   timeline.timeScale(3);
//   timeline.reverse();
// });
