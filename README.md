# FitCore — React + Vite Gym Landing

Lightweight, responsive gym landing site built with React, Vite and Tailwind CSS.

Website: [FitCore](https://gym-app-pink-beta.vercel.app/)

## Tech stack
- React, Vite, Tailwind CSS
- React Router
- ESLint

## Quick start
- Install dependencies:
```sh
npm install
```
- Start dev server:
```sh
npm run dev
```
- Build:
```sh
npm run build
```

## Key files & components
- App entry & routing: [`App`](src/App.jsx) — [src/App.jsx](src/App.jsx)  
- Main mount: [`main.jsx`](src/main.jsx) — [src/main.jsx](src/main.jsx)  
- Navigation component: [`Navbar`](src/Navbar.jsx) — [src/Navbar.jsx](src/Navbar.jsx)  
- Home page: [`Home`](src/pages/Home.jsx) — [src/pages/Home.jsx](src/pages/Home.jsx)  
- Home hero: [`Hero`](src/Home/Hero.jsx) — [src/Home/Hero.jsx](src/Home/Hero.jsx)  
- Sign Up page: [`SignUp`](src/pages/SignUp.jsx) — [src/pages/SignUp.jsx](src/pages/SignUp.jsx)  
- Sign Up hero/card: [`SignCard`](src/SignUp/Hero.jsx) — [src/SignUp/Hero.jsx](src/SignUp/Hero.jsx)  
- Global styles / Tailwind: [`index.css`](src/index.css) — [src/index.css](src/index.css)  
- Vite config: [`vite.config.js`](vite.config.js) — [vite.config.js](vite.config.js)  
- Lint config: [`eslint.config.js`](eslint.config.js) — [eslint.config.js](eslint.config.js)  
- HTML template: [`index.html`](index.html) — [index.html](index.html)  
- Package metadata: [`package.json`](package.json) — [package.json](package.json)

## Project structure
- Root
  - [.gitignore](.gitignore)
  - [eslint.config.js](eslint.config.js)
  - [index.html](index.html)
  - [package.json](package.json)
  - [vite.config.js](vite.config.js)
  - public/
- src/
  - [App.jsx](src/App.jsx)
  - [Footer.jsx](src/Footer.jsx)
  - [index.css](src/index.css)
  - [main.jsx](src/main.jsx)
  - [Navbar.jsx](src/Navbar.jsx)
  - assets/
    - Classes/
    - Testimonials/
    - Trainers/
  - data/
    - [pricingData.js](src/data/pricingData.js)
    - [testimonialsData.js](src/data/testimonialsData.js)
  - Home/
    - [Advertisement.jsx](src/Home/Advertisement.jsx)
    - [Classes.jsx](src/Home/Classes.jsx)
    - [Hero.jsx](src/Home/Hero.jsx)
    - [JoinBanner.jsx](src/Home/JoinBanner.jsx)
    - [Pricing.jsx](src/Home/Pricing.jsx)
    - [Testimonials.jsx](src/Home/Testimonials.jsx)
    - [Trainers.jsx](src/Home/Trainers.jsx)
  - pages/
    - [Home.jsx](src/pages/Home.jsx)
    - [SignUp.jsx](src/pages/SignUp.jsx)
  - SignUp/
    - [Hero.jsx](src/SignUp/Hero.jsx)

## Notes & tips
- Tailwind component utilities (e.g. `.dropdown-item`, `.p-container`, `.input-form`) live in [`src/index.css`](src/index.css) — [src/index.css](src/index.css).

## Contributing
Keep style changes in [src/index.css](src/index.css).
