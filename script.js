import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

("use strict");

const darkButton = document.querySelector(".dark_button");
const learnMoreBtn = document.querySelector(".learn_more");
const progressbar = document.querySelector(".progressbar");

const properties = {
  duration: 3000,
  iterations: Infinity,
};

const keyframes = [
  { offset: 0, transform: "rotate(0deg)" },
  { offset: 0.02, transform: "rotate(-3deg)" },
  { offset: 0.035, transform: "rotate(3deg)" },
  { offset: 0.05, transform: "rotate(0deg)" },
  { offset: 1, transform: "rotate(0deg)" },
];

// adding animation to button
const wiggle = darkButton.animate(keyframes, properties);
// learnMoreBtn.animate(keyframes, properties);

// borrowed code from css-tricks.com
const myScrollTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [new CSSUnitValue(0, "percent"), new CSSUnitValue(100, "percent")],
});

const properties2 = {
  duration: 1,
  fill: "forwards",
  timeline: myScrollTimeline,
};

const keyframes2 = [
  { backgroundColor: "var(--color-accent)", transform: "scaleX(0)" },
  { backgroundColor: "var(--color-dark-accent", transform: "scaleX(1.001)" },
];
// ------------------------- end of borrowed code ------------------------------

// adding animation to progressbar
const progress = progressbar.animate(keyframes2, properties2);

// switching between dark mode and light mode
let theme = localStorage.getItem("data-theme");
const checkbox = document.getElementById("switch");

checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  console.log(theme);
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

// const changeThemeToDark = () => {
//   document.documentElement.setAttribute("data-theme", "dark");
//   localStorage.setItem("data-theme", "dark");
// };

// const changeThemeToLight = () => {
//   document.documentElement.setAttribute("data-theme", "light");
//   localStorage.setItem("data-theme", "light");
// };

function changeThemeToDark() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
}

function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
}
