const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.navigate().to('https://www.amazon.in/');
    await driver.executeScript(`document.querySelector("a[href='https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter']").scrollIntoView()`);
   await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
})();