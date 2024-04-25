const { devices } = require('@playwright/test');

const config = {
  testDir: './tests', // test will run from the path
  retries :0,
  timeout: 50 * 1000, // it will try to run test for 30s
  expect: {
    timeout: 5000 // time to test  assertions
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',
    headless : false, // browser will open
    screenshot : 'on',
    trace : 'on',//off,on   // 'retain-on-failure' -  only take trace for failure
  },
};

module.exports = config;
