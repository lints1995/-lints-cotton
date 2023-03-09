import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/index.js",
    format: "es"
  },
  plugins: [
    typescript() // 会自动读取 文件tsconfig.json配置
  ]
};
