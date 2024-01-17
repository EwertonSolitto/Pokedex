import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        400: "#DEDEDE", // Terciary
        800: "#232323" // Secondary
      },
      stone: {
        400: "#B7B7CE" // Steel
      },
      red: {
        600: "#DD3F2E", // Primary
        800: "#C22E28" // Fighting
      },
      orange: {
        400: "#EE8130" // Fire
      },
      amber: {
        200: "#E2BF65", // Ground
        400: "#F7D02C" // Electric
      },
      yellow: {
        600: "#B6A136", // Rock
        800: "#705746" // Dark
      },
      lime: {
        200: "#A8A77A", // Normal
        300: "#A6B91A", // Bug
        500: "#7AC74C" // Grass
      },
      cyan: {
        200: "#96D9D6" // Ice
      },
      blue: {
        500: "#6390F0" // Water
      },
      indigo: {
        300: "#A98FF3" // Flying
      },
      purple: {
        600: "#6F35FC", // Dragon
        800: "#735797" // Ghost
      },
      fuchsia: {
        500: "#F95587", // Psychic
        800: "#A33EA1" // Poison
      },
      pink: {
        300: "#D685AD" // Fairy
      }
    }
  },
  plugins: [],
}
export default config
