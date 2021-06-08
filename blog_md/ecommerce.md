https://snipcart.com/blog/next-js-ecommerce-tutorial



## next js

https://nextjs.org/docs/getting-started
npx create-next-app



### types 

https://nextjs.org/learn/excel/typescript/nextjs-types



## Typescript setup
https://nextjs.org/docs/basic-features/typescript
touch tsconfig.json
npm run dev

## tailwind 
https://tailwindcss.com/docs/guides/nextjs
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p



Set up JIT and darkmode

https://tailwindcss.com/docs/dark-mode

https://dev.to/thomasledoux1/easy-way-to-use-dark-mode-in-next-js-tailwind-2ob1

https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch



```javascript
// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Inside tailwind ./styles/globals.cs

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```



### font

https://github.com/tailwindlabs/discuss/issues/177

https://daily-dev-tips.com/posts/using-google-fonts-in-a-tailwind-project/

https://scottw.com/blog/google-font-tailwind/



### color

https://tailwindcss.com/docs/customizing-colors



### components

https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/



## internationalization

https://github.com/isaachinman/next-i18next

https://github.com/vercel/next.js/issues/7755





## figma

Design app logo and exort as svg

Design for drinks website 



## home

header

https://tailwindcomponents.com/component/responsive-header

https://tailwindcomponents.com/component/simple-responsive-navigation-bar-1

https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1

https://dev.to/cryptic022/sticky-header-and-footer-with-tailwind-2oik

https://tailwindcomponents.com/component/wip-hamburger-menu-animation

https://tailwindcss.com/docs/backdrop-filter

https://stackoverflow.com/questions/60169463/tailwindcss-fixed-navbar

https://gitlab.com/catamphetamine/country-flag-icons#readme

https://www.npmjs.com/package/tailwind-scrollbar-hide



Tea 

https://www.npmjs.com/package/react-currency-format

https://github.com/tailwindlabs/tailwindcss-line-clamp



redux 

https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit/src



Graphics

https://1stwebdesigner.com/15-mind-bending-three-js-javascript-experiments/

https://www.youtube.com/watch?v=91Q6RvKvd7o



## stripe

https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript

https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe

https://www.youtube.com/watch?v=5-bZYEeYcKE



