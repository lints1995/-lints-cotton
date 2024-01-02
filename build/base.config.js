import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import clear from "rollup-plugin-clear";

export const baseConfig = {
  output: [
    {
      file: "dist/index.js",
      format: "es"
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      exports: "named",
      name: "$c"
    }
  ]
};

export const basePlugins = [
  typescript({
    useTsconfigDeclarationDir: true
  }),
  commonjs(),
  terser(),
  cleanup(),
  clear({
    targets: ["dist"] // 项目打包编译生成的目录
  })
];
