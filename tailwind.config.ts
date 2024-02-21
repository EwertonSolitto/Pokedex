import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bug: "#A6B91A",
      dark: "#705746",
      dragon: "#6F35FC",
      electric: "#F7D02C",
      fairy: "#D685AD",
      flying: "#A98FF3",
      fighting: "#C22E28",
      fire: "#EE8130",
      ghost: "#735797",
      grass: "#7AC74C",
      ground: "#E2BF65",
      ice: "#96D9D6",
      normal: "#A8A77A",
      poison: "#A33EA1",
      psychic: "#F95587",
      rock: "#B6A136",
      steel: "#B7B7CE",
      water: "#6390F0",

      gray: {
        400: "#DEDEDE", // Terciary
        800: "#232323" // Secondary
      },
      red: {
        600: "#DD3F2E", // Primary
      }
    }
  },
  plugins: [],
}
export default config
