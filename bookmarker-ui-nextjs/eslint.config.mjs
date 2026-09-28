import coreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  ...coreWebVitals,
  {
    ignores: [".next/", "node_modules/", "coverage/", "next-env.d.ts"]
  }
];
