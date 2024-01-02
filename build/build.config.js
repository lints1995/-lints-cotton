import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import clear from "rollup-plugin-clear";

export default {
  input: "./src/index.ts",
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
    typescript({
      useTsconfigDeclarationDir: true
    }),
    commonjs(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }),
    cleanup(),
    clear({
      targets: ["dist"] // 项目打包编译生成的目录
    })
  ]
};
