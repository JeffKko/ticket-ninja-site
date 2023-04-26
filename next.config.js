/** @type {import('next').NextConfig} */

const withExportImages = require('next-export-optimize-images');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  ...withExportImages({
    // write your next.js configuration values.
  }),
};
