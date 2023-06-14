const startLoader = () => {
  const counter = document.querySelector(".counter");
  let currentCounterValue = 0;

  const updateCounter = () => {
    if (currentCounterValue === 100) return;
    currentCounterValue += Math.floor(Math.random() * 10) + 1;

    if (currentCounterValue > 100) currentCounterValue = 100;

    counter.textContent = currentCounterValue;

    const delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  };

  updateCounter();
};

startLoader();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
  //   css: {
  //     zIndex: 0,
  //     // display: "none",
  //   },
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".h1", 1.5, {
  delay: 4,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".hero", 2, {
  delay: 4.5,
  y: 400,
  ease: "power4.inOut",
});
