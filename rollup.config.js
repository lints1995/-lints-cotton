import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import clear from "rollup-plugin-clear";

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";
const getServer = () => {
  return !isProd
    ? [
        serve({
          // open: true, // 运行时自动打开浏览器
          verbose: false,
          historyApiFallback: true,
          contentBase: ".",
          host: "localhost",
          port: 10001,
          onListening: () => {
            console.log("Listening:", "http://localhost:10001");
          }
        }),
        livereload({
          verbose: false
        })
      ]
    : [];
};

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
      exports: "named",
      name: "$c"
    }
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    }),
    commonjs(),
    terser({
      compress: {
        drop_console: isProd,
        drop_debugger: isProd
      }
    }),
    cleanup(),
    clear({
      targets: ["dist"] // 项目打包编译生成的目录
    }),
    ...getServer()
  ]
};
