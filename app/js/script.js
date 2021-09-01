const timeline = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

timeline.from('.load-text span', {
  duration: 1.5,
  delay: 0.5,
  skewX: -10,
  skewY: 10,
  stagger: {
    amount: 0.4,
  },
  y: 50,
  x: -20,
  opacity: 0,
});
timeline.to('.load-text span', {
  duration: 1.5,
  delay: 2,
  skewX: 10,
  skewY: -10,
  stagger: {
    amount: 0.4,
  },
  y: -50,
  x: 20,
  opacity: 0,
});
timeline.to(
  '.pre-loader',
  {
    delay: 0.5,
    duration: 1.5,
    opacity: 0,
  },
  '-=.3'
);
timeline.to('.pre-loader', {
  zIndex: -1,
  duration: 0.1,
});
timeline.from(
  '.logo',
  {
    duration: 1,
    opacity: 0,
    y: -100,
  },
  '-=.2'
);
timeline.from('.main-text', {
  duration: 1.2,
  opacity: 0,
  skewY: 10,
  y: 100,
  stagger: {
    amount: 0.4,
  },
});
timeline.from('.reel', {
  opacity: 0,
  duration: 2,
});

gsap.from('.about-text', {
  scrollTrigger: {
    trigger: '.about-text',
    toggleActions: 'restart pause none pause',
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
});

gsap.from('.about-desc p, .gettouch', {
  scrollTrigger: {
    trigger: '.about-desc p, .gettouch',
    toggleActions: 'restart pause none pause',
  },
  y: 100,
  skewY: 10,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  stagger: {
    amount: 0.5,
  },
});

gsap.from('.about-hero', {
  scrollTrigger: {
    trigger: '.about-hero',
    toggleActions: 'restart none none none',
  },
  height: 0,
  opacity: 0,
  delay: 0.8,
  duration: 1.5,
});
gsap.from('.reel2', {
  scrollTrigger: {
    trigger: '.reel2',
    toggleActions: 'restart pause reverse pause',
  },
  y: -200,
  opacity: 0,
  duration: 2,
});
gsap.from('.main-text2', {
  scrollTrigger: {
    trigger: '.main-text2',
    toggleActions: 'restart pause reverse pause',
  },
  y: 100,
  skewY: 10,
  opacity: 0,
  duration: 1.2,

  stagger: {
    amount: 0.4,
  },
});
