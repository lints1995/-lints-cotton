import { basePlugins } from "./base.config";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.ts",
  external: ["test"],
  output: [
    {
      file: "dist/index.js",
      format: "es",
      sourcemap: true
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      exports: "named",
      name: "$c",
      sourcemap: true
    }
  ],
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
