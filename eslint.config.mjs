import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** Next.js 16 removed the `next lint` CLI; use `npm run lint` → eslint. */
export default [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "node_modules/**", "out/**", "*.config.mjs"],
  },
];
