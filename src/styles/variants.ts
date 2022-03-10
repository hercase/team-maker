export const variants = {
    idle: {
      x: 0,
      rotate: [-0.5, 0.5, -0.4, 0.4, -0.2, 0.2, 0],
      transition: { type: "spring" },
    },
    shuffling: {
      x: [0.2, -0.2],
      rotate: [0.5, -0.5],
      transition: {
        flip: Infinity,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };