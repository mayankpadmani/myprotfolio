import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  env: {
    MY_EMAIL: process.env.MY_EMAIL,
    MY_EMAIL_PASSWORD: process.env.MY_EMAIL_PASSWORD,
  },
};

export default nextConfig;
