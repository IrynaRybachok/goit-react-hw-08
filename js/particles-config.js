/* global particlesJS */
/* eslint no-undef: "off" */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        // mode: "repulse",
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    // modes: {
    //   repulse: {
    //     distance: 100, // Дистанция, на которой частицы начнут убегать
    //     duration: 0.4, // Продолжительность эффекта отталкивания
    //   },
    // },
  },
  retina_detect: true,
});
