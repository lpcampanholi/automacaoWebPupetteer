import puppeteer from 'puppeteer'

async function robo() {

  const loginClikUp = 'luis.campanholi@viseueditores.com.br'
  const senhaClikUp = 'Zoh27752'

  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage()

    // Set screen size
  await page.setViewport({width: 1080, height: 1024});
  
  // Login no ClikUp
  await page.goto('https://app.clickup.com/login')
  await page.type('#login-email-input', loginClikUp)
  await page.type('#login-password-input', senhaClikUp)
  await page.click('[type="submit"]')
  await page.waitForNavigation();

  // Task do Livro
  await page.goto('https://app.clickup.com/t/befhea')

  // Link do Drive
  await page.waitForSelector('.cu-custom-fields__header-items-value__url', { visible: true })
  const linkDrive = await page.evaluate(() => {
      const element = document.querySelector(".cu-custom-fields__header-items-value__url")
      return element ? element.href : null;  // Retorna o href se o elemento existir
  });

  // Acessa o Drive
  await page.goto(linkDrive)
  await page.type('#identifierId', loginGoogle)
  await page.click('.VfPpkd-RLmnJb')


  //await browser.close();

}

robo();


