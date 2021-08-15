module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
  },
}
