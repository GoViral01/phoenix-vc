import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#6200EE",
        },
        darkBg: {
          DEFAULT: "#0C0A1A",
        },
        black: {
          DEFAULT: "#000000",
          light: "#8C8C8C",
          "12": "#141414",
          "8": "#595959",
        },
      },
    },
  },
  plugins: [],
};
export default config;
