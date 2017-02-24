module.exports = {
  output: {
    chunkFilename: "[name].js", // Could be [name]-[chunkhash].js but that breaks npm run dev for now.
    filename: "[name].js"
  },
}
