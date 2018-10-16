const shell = require('shelljs');

shell.exec('node ./config/server.js --env=dev', { async: true }, (code, stdout, stderr) => {});
shell.exec('webpack --config ./config/webpack.ie.dev.config.js --watch', { async: true }, (code, stdout, stderr) => {});
