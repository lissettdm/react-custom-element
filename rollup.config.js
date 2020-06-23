import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";


import pkg from "./package.json";

const getPluginsConfig = (prod) => {
  const plugins = [
    external(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        prod ? "production" : "development"
      ),
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    terser(), /** minified */
  ];

  return plugins;
};

export default (CLIArgs) => {
  const prod = !!CLIArgs.prod;
  const mini = !!CLIArgs.mini;
  const bundle = {
    input: ["./src/index.js"],
    output: [
      {
        dir: pkg.main,
        format: "esm",
      },
    ],
  };
  bundle.plugins = getPluginsConfig(prod, mini);
  return bundle;
};
