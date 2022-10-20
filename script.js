tsParticles.load("tsparticles", {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 80,
        duration: 2,
        opacity: 1,
        color: "red",
        size: 8
      }

        // repulse: {
        //   distance: 50,
        //   duration: 3,
        //   easing: "ease-out-back"
        // }

    }
  },
  particles: {
    color: {
      value: "#BCBCBC"
    },
    links: {
      blink: false,
      color: "#BCBCBC",
      consent: false,
      distance: 150,
      enable: true,
      opacity: 1,
      width: 1
    },
    move: {
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: false,
        area: 800
      },
      limit: 0,
      value: 70
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.05,
        speed: 2,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 2,
        speed: 40,
        sync: false
      },
      random: false,
      value: 3
    }
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "white",
      lineWidth: 0.1
    },
    move: {
      radius: 20
    },
    position: {
      x: 30,
      y: 30
    },
    inlineArrangement: "equidistant",
    scale: 5,
    type: "inline",
    data: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 110.33" style="enable-background:new 0 0 122.88 110.33" xml:space="preserve"><g><path d="M5.83,46,11.92,65l12.43,8.66,4.19-2.16,10.8-4.32,2.7,4,4.07,7.23,10.81-15L46.38,53.5,46.21,45l-8.75-8.67L43.8,36l7,7.75,1,8.12L62.75,63.17,50,83.22l16.6,6.44,10.09,24.51L87.74,90l24.17,2.53,13.58-5.06-12,1.14,12.83-6.76-3.94-4.18-3.22,1.89-16.29,8.5-4.13-2.76L117.31,75,99.48,62.82,115.69,50l3.38,3.11-12.3,9.59,18.38,11.75,14.45-8.78,2-14.63.45-3.61-5.14-2-14.34,2.08.83-3.83,12.3-2.43-12-15.68-18.1,9.12-3.11-3.71L121,21.48,91,8.24,77.18,22.15l7.44,7.38L79.07,42.15l40.81.81-2,3.49-22.42-.08-21.94-1,6.8-15.68-8.75-7.09L87.05,6.48l-43.51,2L19.9,24.86S11.11,38.64,8.62,41.68s-7.13,1.13-7.13,1.13L14.4,22.35,41.52,2,88.77.17l36.36,16.71L149.51,47l-3.65,21-13.68,7.16,3.64,5.75L130.68,93.1l-17.56,4L92.72,95.6,76.84,129,60.35,93.2,46.58,88l-8.9-12L26.12,80.71,7.22,67.86l-7-22.4Zm61.91,22,8.65,31.38L94,62.55ZM49.48,15.13,39.35,27.56l3.78,2.3,6.49-8,14.19,7L58.54,40.6,70,54.45l2.84-4.06L63.4,39.31l5.81-12.56ZM11,45l6.56,16,8,7.26,5.7-2.68L22.33,56.6l-3-6.61,14.46-5.68L32.19,40,17.46,45.8l-1.35-4.73ZM93.13,58.63l5.63-10L81.1,55.29,70.16,61.61Z"/></g></svg>`
  }
});