export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -48px 0px",
} as const;

/** Triggers sooner — avoids “scroll further before reviews appear” on mobile. */
export const motionViewportImmediate = {
  once: true,
  amount: 0,
  margin: "0px 0px 80px 0px",
} as const;

export const motionStagger = 0.07;