const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.navigate().to('https://www.google.com/ncr');
    await driver.navigate().refresh();
    //await driver.executeScript(`document.querySelector("a[href='https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter']").scrollIntoView()`);

    //await driver.navigate().back();
    //await driver.navigate().forward();
    await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
})();