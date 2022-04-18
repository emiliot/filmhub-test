# Filmhub Test

This project was bootstraped using next.js + tailwindcss.

To install dependencies go for `npm i`

To run it locally `npm run dev`

To see it deployed go to [filmhub-vercel-app](https://filmhub-test.vercel.app/)

## Folder Structure

- Components: used for react components and css
- Hooks: used for shared hooks
- pages: NextJs default pages
- types: for Typescript shared types
- utils: for utility functions to handle data

# Todo:

- e2e tests using `cypress` for

  - loading main page -> going to detail page
  - loading main page -> search title -> going to details
  - loading detail page by url

- Unit Tests
  - Test for react components using `jest` and `react-testing-library`
  - Test for the functions in the utils folder using `jest` only
