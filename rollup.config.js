import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es"
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "$c"
    }
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    }),
    commonjs(),
    terser()
  ]
};
