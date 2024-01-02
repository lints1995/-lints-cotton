import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import clear from "rollup-plugin-clear";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

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

export const basePluginsDev = [
  ...basePlugins,
  livereload({
    verbose: false
  }),
  serve({
    // open: true, // 运行时自动打开浏览器
    verbose: false,
    historyApiFallback: true,
    contentBase: ".",
    host: "localhost",
    port: 10001,
    onListening: () => {
      console.log("Listening->", "http://localhost:10001");
    }
  })
];

export const outputDev = [
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
];
