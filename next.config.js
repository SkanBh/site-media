/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  
  env: { API: "https://api.hakaekonline.com/api/" },
  images: {
    domains: ["api.hakaekonline.com"],
  },
});