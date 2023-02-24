const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

const cracoLess = require("craco-less");
const AutoImport = require("unplugin-auto-import/webpack");

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
    plugins: [
      AutoImport({
        imports: ["react", "react-router-dom"],
        dirs: ["./src/api/**"],
        dts: "./types/global/typesImport.d.ts",
      }),
    ],
  },
  style: {
    postOption: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: cracoLess,
    },
  ],
};
