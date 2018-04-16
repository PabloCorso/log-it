module.exports = function(env) {
  const path = require("path");

  const config = {
    entry: {
      app: ["babel-polyfill", "./src/app.js"]
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "app.bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ["env", "stage-0"]
          }
        }
      ]
    }
  };

  if (env.mode === "production") {
    config.mode = env.mode;
  } else {
    config.mode = "development";
    config.devtool = "#source-map";
    config.devServer = {
      open: "chrome",
      openPage: "public"
    };
  }

  return config;
};
