import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wellness: {
          primary: "hsl(137, 42%, 33%)",
          secondary: "hsl(137, 42%, 23%)",
          accent: "hsl(37, 52%, 64%)"
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
} satisfies Config;
