const postcss = require("postcss");
const fs = require("fs");
const tailwindcss = require("tailwindcss");

postcss([tailwindcss(__dirname + "/tailwind.config.js")])
  .process(fs.readFileSync(__dirname + "/src/index.css", "utf8"))
  .then((result) => {
    console.log(result.messages);
  });
