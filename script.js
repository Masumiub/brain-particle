tsParticles.load("brainparticles", {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble" // OnHover Effect
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 80,
        duration: 2,
        opacity: 0.1, // OnHover Bubble Opacity
        color: {
          value: "rgb(200, 10, 73)" // OnHover Bubble Color 
        },
        size: 12 // OnHover Bubble Size
      }
    }
  },
  particles: {
    color: {
      value: "#D6D6D6" // Particle Color
    },
    links: {
      blink: true,
      color: "#D6D6D6", // Line Color
      consent: false,
      distance: 150, 
      enable: true,
      opacity: 1, // Line Opacity
      width: 0.7 // Line Width
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
        area: 2000 // Particle Amount Value on Area
      },
      limit: 0,
      value: 43 // Particle Amount Value
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.5,
        speed: 2,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      type: "circle" // Particle Shape
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 2,
        speed: 40,
        sync: false
      },
      random: false,
      value: 4 // Particle Size
    }
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "white",
      lineWidth: 1 // Polygon Shape Line Width
    },
    move: {
      radius: 13.5  // Particle Movement Radius
    },
    position: {
      x: 30,
      y: 30
    },
    inlineArrangement: "equidistant",
    scale: 4, // Total Particle Brain Shape Scale (Change the value to scale the Brain Shape). 
    type: "inline",
    data: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 110.33" style="enable-background:new 0 0 122.88 110.33" xml:space="preserve"><g><path d="M71.95,46.37l-18.62-1.04l5.78-16.38l-7.43-7.41L64.84,4.7 M120.14,43.33 M42.42,70.66 M0.15,38.61l5.93,19.01
    l16.05,10.91l9.81-4.01l7.55,7.2l11.69,7.41l14,33.39L78.87,75.7h18h9l7-9l3.76-4.68l7.13-4.38l5.1-18.78l-22.7-24.53L75.3,0.16
    L35.2,1.74L12.18,18.99L1.21,36.35c0,0,3.95,1.63,6.06-0.96 M39.09,6.87V21.7H16.87l-5,19 M80.95,60.7H48.87L25.62,35.8L11.87,49.7
     M90.87,62.7l6-8l4.94-15.33l-9.94,3.33L80.95,22.45l6.84-2.66l5.07,9.92l12.48-4.62 M55.4,78.57l9.47,17.13l-3.05-2.73l3.05,10.73
    l5-16 M90.87,68.7l-20,3v10 M47.87,68.7l11-2l6,7 M40.86,40.7l9.01-8l-7.45-3.24L30.87,31.7 M47.87,11.58l-3,11.12 M79.9,11.58
    L67.07,22.7l7.8,15l4.04-1.91l6.96,15.91 M107.42,35.08l12.45,5.62l-19.24,28.32"/></g></svg>` // change the "d=" value here to change the brain shape.
  }
});
