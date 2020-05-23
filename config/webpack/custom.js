const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "..", "app/javascript/src"),
      "@views": path.resolve(__dirname, "..", "..", "app/javascript/src/views"),
      "@components": path.resolve(__dirname, "..", "..", "app/javascript/src/views/components")
    }
  }
};
