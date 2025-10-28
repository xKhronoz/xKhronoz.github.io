// PostCSS configuration for building Tailwind CSS v4 output
// - tailwindcss: generates utilities (v4 emits nested rules)
// - postcss-nesting: transforms nested rules into valid CSS
// - autoprefixer: vendor prefixes
// - cssnano: minify in production

module.exports = {
  plugins: [
    // Use the official PostCSS bridge package for Tailwind v4+
    // The Tailwind PostCSS plugin moved to `@tailwindcss/postcss`.
    require("@tailwindcss/postcss")({
      config: "./tailwind.config.js",
    }),
    require("postcss-nesting"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [require("cssnano")({ preset: "default" })]
      : []),
  ],
};
