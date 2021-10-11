'use strict';

const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('./cypress/', 'config', `cypress.test.json`); //${file}

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  const file = config.env.configFile;
  on('file:preprocessor', cucumber());
  return getConfigurationByFile(file);
}

