// 縦に揺れる
export const Bounds = {
  // bounds: {
  //   animation: "$fluffy 6s ease infinite",
  // },
  // "@keyframes fluffy": {
  //   "0%": {
  //     transform: "translateY(0)",
  //   },
  //   "3%": {
  //     transform: "translateY(0)",
  //   },
  //   "5%": {
  //     transform: "translateY(0)",
  //   },
  //   "10%": {
  //     transform: "translateY(-8px)",
  //   },
  //   "12.5%": {
  //     transform: "translateY(0)",
  //   },
  //   "15%": {
  //     transform: "translateY(-4px)",
  //   },
  //   "25%": {
  //     transform: "translateY(0)",
  //   },
  //   "100%": {
  //     transform: "translateY(0)",
  //   },
  // },
  bounds: {
    animation: "$bound 2s ease-in-out infinite",
  },
  "@keyframes bound": {
    "0%": {
      transform: "translateY(0)",
    },
    "17.5%": {
      transform: "translateY(-20px)",
    },
    "25%": {
      transform: "translateY(0)",
    },
    "32.5%": {
      transform: "translateY(-10px)",
    },
    "40%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
};
