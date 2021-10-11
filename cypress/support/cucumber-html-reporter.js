const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'reports/cucumber-json',
  output: 'reports/cucumber-html/cucumber_report.html',
  brandTitle: 'Charlie Category and Subcategory Regression Tests',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "QA",
    "Browser": "Chrome",
    "Platform": "Windows 10"
  }
};

reporter.generate(options);
