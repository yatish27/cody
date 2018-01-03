const environment = require("./environment");

// Use babel-minify in production instead of UglifyJS
environment.plugins.delete('UglifyJs');

module.exports = environment.toWebpackConfig();
