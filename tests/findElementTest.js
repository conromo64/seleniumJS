const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.navigate().to('https://www.amazon.in/');
    const ele = await driver.findElement(By.css("a[href='https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter']"))
    driver.actions().move({origin:ele}).pause(2000).press().pause(2000).perform()





    await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
})();