gsap.fromTo(
  ".c-logo",
  { duration: 3, delay: 3, x: -800 },
  { duration: 1, delay: 4, x: 0, ease: "bounce" }
);

gsap.from(".sect", { duration: 2, delay: 1, y: -400 });

gsap.fromTo(
  ".section-one",
  { duration: 2, delay: 5, opacity: 0 },
  { duration: 1, delay: 2, opacity: 1 }
);

gsap.from(".img", { duration: 5, delay: 2, x: -600 });

gsap.from(".section-two-side", { duration: 5, delay: 2, x: 600 });

gsap.fromTo(
  ".section-three",
  { duration: 7, delay: 2, opacity: 0 },
  { duration: 1, delay: 2, opacity: 1 }
);

gsap.fromTo(
  ".head",
  { duration: 7, delay: 2, opacity: 0, rotate: 300 },
  { duration: 1, delay: 2, opacity: 1, rotate: 0 }
);
