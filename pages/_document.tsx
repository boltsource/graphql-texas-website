import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="bg-white text-cinder text-md antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
