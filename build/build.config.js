import { baseConfig, basePlugins } from "./base.config";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.ts",
  ...baseConfig,
  plugins: [
    ...basePlugins,
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    })
  ]
};
