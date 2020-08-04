import React from 'react'

import Logo from './ui/layout/logo'

type OgImageProps = {
  alt?: boolean
  image?: string
  subtitle: string
  title: string
}

const OgImage: React.FC<OgImageProps> = ({ alt, image, subtitle, title }) => {
  return (
    <React.Fragment>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: `
                *, ::before, ::after {
                  box-sizing: border-box;
                  border-width: 0;
                  border-style: solid;
                  border-color: currentColor;
                  margin: 0;
                }

                html {
                  font-family: "Rubik", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                }

                body {
                  font-size: 18px;
                  line-height: 1.25;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                }
                
                .container {
                  align-items: center;
                  background-color: ${alt ? '#6233ef' : '#1a1725'};
                  color: #ffffff;
                  display: flex;
                  flex-direction: column;
                  height: 834px;
                  justify-content: center;
                  padding: 0 176px;
                  position: relative;
                  width: 1461px;
                }

                
                .wrapper {
                  align-items: center;
                  display: flex;
                  position: relative;
                  width: 100%;
                  z-index: 10;
                }

                .image {
                  border-radius: 100%;
                  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                  flex-shrink: 0;
                  height: 240px;
                  margin-right: 80px;
                  width: 240px;
                }

                .content {
                  display: flex;
                  flex: 1 1 0;
                  flex-direction: column;
                }

                .subtitle {
                  color: rgba(255, 255, 255, 0.${alt ? '75' : '50'});
                  font-size: 36px;
                  font-weight: 700;
                }

                .title {
                  font-size: 56px;
                  font-weight: 700;
                  line-height: 1.25;
                  margin: 40px 0 80px 0;
                }

                .logo {
                  height: 56px;
                  margin-left: auto;
                  width: auto;
                }

                .decoration {
                  bottom: 0;
                  height: auto;
                  position: absolute;
                  right: 0;
                  width: 50vw;
                }`,
            }}
          />
        </head>
      </html>

      <body>
        <div className="container">
          <div className="wrapper">
            {image ? <img className="image" src={image} /> : null}

            <div className="content">
              <div className="subtitle">{subtitle}</div>
              <h1 className="title">{title}</h1>
              <Logo alt={alt} className="logo" />
            </div>
          </div>

          <svg
            width="821"
            height="680"
            viewBox="0 0 821 680"
            fill="none"
            className="decoration"
          >
            <path
              d="M641.473 649.719L477.053 238.858L915.079 301.897L641.473 649.719Z"
              stroke={alt ? 'black' : 'white'}
              strokeOpacity="0.03"
              strokeWidth="50"
            />
            <path
              d="M367.293 752.481L202.873 341.62L640.899 404.659L367.293 752.481Z"
              stroke={alt ? 'black' : 'white'}
              strokeOpacity="0.03"
              strokeWidth="50"
            />
          </svg>
        </div>
      </body>
    </React.Fragment>
  )
}

export default OgImage
