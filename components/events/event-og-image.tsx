import React from 'react'
import { Helmet } from 'react-helmet'

import Logo from '@components/ui/layout/logo'
import { Event } from '@lib/api'

type EventOgImageProps = {
  title: Event['title']
}

const EventOgImage: React.FC<EventOgImageProps> = ({ title }) => {
  return (
    <React.Fragment>
      <Helmet>
        <style type="text/css">{`
          .container {
            align-items: center;
            background-color: #1a1725;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            padding: 160px;
            position: relative;
            width: 100w;
          }

          .wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 90%;
            z-index: 10;
          }

          .date {
            color: rgba(255, 255, 255, 0.50);
            font-size: 36px;
            font-weight: 700;
          }

          .title {
            font-size: 64px;
            font-weight: 700;
            line-height: 1.25;
            margin: 160px 0;
          }

          .logo {
            height: 80px;
            margin-left: auto;
            width: auto;
          }

          .decoration {
            bottom: 0;
            height: auto;
            position: absolute;
            right: 0;
            width: 50vw;
          }
        `}</style>
      </Helmet>

      <div className="container">
        <div className="wrapper">
          <div className="date ">08.27.2020</div>
          <h1 className="title">{title}</h1>
          <Logo className="logo" />
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
            stroke="white"
            strokeOpacity="0.03"
            strokeWidth="50"
          />
          <path
            d="M367.293 752.481L202.873 341.62L640.899 404.659L367.293 752.481Z"
            stroke="white"
            strokeOpacity="0.03"
            strokeWidth="50"
          />
        </svg>
      </div>
    </React.Fragment>
  )
}

export default EventOgImage
