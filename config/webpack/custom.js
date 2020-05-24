const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "..", "app/javascript/packs"),
      "@views": path.resolve(__dirname, "..", "..", "app/javascript/packs/views"),
      "@components": path.resolve(__dirname, "..", "..", "app/javascript/packs/components"),
      "@utils": path.resolve(__dirname, "..", "..", "app/javascript/packs/utils"),
      "@actions": path.resolve(__dirname, "..", "..", "app/javascript/packs/actions"),
      "@admin": path.resolve(__dirname, "..", "..", "app/javascript/packs/admin"),
      "@api": path.resolve(__dirname, "..", "..", "app/javascript/packs/api")
    }
  }
};
