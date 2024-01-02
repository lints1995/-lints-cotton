import { basePlugins } from "./base.config";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "./test/index.ts",
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
  ]
};
