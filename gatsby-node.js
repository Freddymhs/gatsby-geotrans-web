const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@components": path.resolve(__dirname, "src/components"),
        "@componentsv2": path.resolve(__dirname, "src/componentsv2"),
        "@styles": path.resolve(__dirname, "src/assetsv2/styles"),
        "@fonts": path.resolve(__dirname, "src/assetsv2/fonts"),
        "@bd": path.resolve(__dirname, "src/data"),
        "@images": path.resolve(__dirname, "src/assetsv2/images"),
        "@videos": path.resolve(__dirname, "src/assetsv2/videos"),
        "@favicons": path.resolve(__dirname, "src/assetsv2/favicons"),
      },
    },
  });
};
exports.createPages = async ({ graphql, actions }) => {};
