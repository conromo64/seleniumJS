const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.selenium.dev/selenium/web/mouse_interaction.html');

    const srcEle = await driver.findElement(By.id('draggable'));
    const targetEle = await driver.findElement(By.id('droppable'));
    await driver.actions({async:true}).dragAndDrop(srcEle,targetEle).perform();

    await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
})();