<!-- npx tailwindcss init -->
<!-- After the above command tailwind.config.js is created. -->

<!-- tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
 -->

<!-- dist/index.html

 -->

<!-- dist/style.css

 -->

<!-- src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;
 -->
 
<!-- npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch --> 