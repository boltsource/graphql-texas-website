import chrome from 'chrome-aws-lambda'
import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer-core'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Helmet } from 'react-helmet'

const getHtml = async <C extends React.ComponentType<any>>(
  component: C,
  props: React.ComponentProps<C>
) => {
  const content = renderToStaticMarkup(React.createElement(component, props))
  const helmet = Helmet.renderStatic()

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
      *, ::before, ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }

      html {
        font-family: "Rubik", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
    
      body {
        font-size: 18px;
        line-height: 1.25;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    </style>
    ${helmet.style.toString()}
  </head>
  <body>${content}</body>
</html>
`
}

let _page: puppeteer.Page | null

const getPage = async () => {
  if (_page) return _page

  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {
        args: [],
        executablePath:
          process.platform === 'win32'
            ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
            : process.platform === 'linux'
            ? '/usr/bin/google-chrome'
            : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true,
      }

  const browser = await puppeteer.launch(options)
  _page = await browser.newPage()
  return _page
}

const getScreenshot = async (html: string) => {
  const page = await getPage()
  await page.setViewport({ width: 1461, height: 834 })
  await page.setContent(html)
  return await page.screenshot({ type: 'png' })
}

const generate = async <C extends React.ComponentType<any>>(
  component: C,
  props: React.ComponentProps<C>,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const html = await getHtml(component, props)

  if (req.query.debug !== undefined) {
    return res.end(html)
  }

  const file = await getScreenshot(html)

  res.statusCode = 200
  res.setHeader('Content-Type', 'image/png')
  res.setHeader(
    'Cache-Control',
    `public, immutable, no-transform, s-maxage=1800, max-age=1800`
  )

  res.end(file)
}

export default generate
