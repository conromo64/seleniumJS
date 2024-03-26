const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.selenium.dev/selenium/web/mouse_interaction.html');

    const ele = await driver.findElement(By.id('click'));
    //await driver.actions().contextClick(ele).perform();
    //await driver.actions().doubleClick(ele).perform();
    await driver.actions().click(ele).perform();

    await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
})();