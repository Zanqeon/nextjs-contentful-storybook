const path = require('path')

module.exports = {
  cssModules: true,
  sassOptions: {
    includePaths: [ path.resolve(__dirname, './src')]
  }
}
