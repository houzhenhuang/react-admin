const CracoLessPlugin = require("craco-less")
const path = require("path")
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@comp": path.resolve(__dirname, "src/components"),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
}