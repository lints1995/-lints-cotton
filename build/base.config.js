import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import clear from "rollup-plugin-clear";

// 插件
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
