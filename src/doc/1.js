let puppeteer = require('puppeteer');
const delay = (ms) => new Promise(function (resolve) {
    setTimeout(() => {
        resolve();
    }, ms);
});
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.click('button[id="counter1"]');
    await delay(3000);
    await page.click('button[id="counter1-increment"]');
    await delay(3000);
    await page.click('button[id="counter2"]');
    await delay(3000);
    await page.click('button[id="counter2-decrement"]');
    await browser.close();
})();