const puppeteer = require('puppeteer');

setInterval(() => {
  puppeteer.launch({ headless: true }).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://solforms.onrender.com/');
    console.log('Website visited!');
    await browser.close();
  });
}, 1800000); // 15 minutes in milliseconds
