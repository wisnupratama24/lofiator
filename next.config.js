/** @type {import('next').NextConfig} */

const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
});

module.exports = {
  reactStrictMode: true,
};
