import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,jsx,js}",
    "./components/**/*.{ts,tsx,jsx,js}",
    "./app/**/*.{ts,tsx,jsx,js}",
    "./src/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
