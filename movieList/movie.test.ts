import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})
test('adds a movie to the page', async () => {
    let searchBar = await driver.findElement(By.xpath('//input')).sendKeys('meatcanyon\n')
    expect("meatcanyon").toBe("meatcanyon");
    // await searchBar.sendKeys('meatcanyon\n');
    await driver.sleep(5000)
    let deletebutton = await driver.findElement(By.xpath('//button[contains(text(), "x")]')).click();
    await driver.sleep(5000)
    
});