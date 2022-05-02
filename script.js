// Play beats
const tingGanIn = document.querySelector("#tingGanIn");
let isPlaying = false;

// window.onload = function () {
//   document.getElementById("tingGanIn").play();
// };

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

// GSAP
gsap.from(".container__text", {
  duration: 3,
  y: "100%",
  opacity: 0,
  ease: "expo.out",
});

// gsap.from(".container__speakers", {
//   duration: 3,
//   y: "10%",
//   opacity: 0,
//   delay: 1,
//   ease: "expo.out",
// });

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
