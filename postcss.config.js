import tailwind from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default {
  plugins: [
    tailwind({
      content: ['./src/.vitepress/theme/**/*.vue'],
      plugins: [tailwindTypography],
    }),
  ],
}
