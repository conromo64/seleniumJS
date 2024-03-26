const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.selenium.dev/selenium/web/mouse_interaction.html');

    const ele = await driver.findElement(By.id('clickable'));
    await driver.actions().sendKeys(ele,"martin").perform();

    await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
})();