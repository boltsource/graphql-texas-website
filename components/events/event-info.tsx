import React from 'react'
import Markdown from 'react-markdown'

import Grid from '@components/ui/grid'
import { Event } from '@lib/api'

type EventInfoProps = {
  description: Event['description']
}

const EventInfo: React.FC<EventInfoProps> = ({ description }) => {
  return (
    <div
      id="info"
      className="relative min-h-screen-minus-header bg-cinder text-white py-xl lg:py-2xl flex items-center"
    >
      <Grid className="relative z-10">
        <div className="col-start-1 col-end-7 lg:col-start-1 lg:col-end-13 flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <Markdown
              source={description}
              className="typography-markdown text-center lg:text-left lg:flex-auto"
            />

            <svg
              viewBox="0 0 601.707 248.64"
              className="mt-xl lg:mt-none lg:ml-xl w-3/4 self-center"
            >
              <path
                d="M297.137 112.37c0-5.53-4.098-7.989-11.678-7.989h-15.707v15.912h15.707c7.58 0 11.678-2.39 11.678-7.922zm-27.385-28.82v15.298h14c6.965 0 10.925-2.593 10.925-7.648 0-5.053-3.96-7.65-10.925-7.65zm34.283 29.369c0 8.193-6.216 12.905-18.304 12.905h-22.807V78.02h21.443c10.994 0 17.14 4.645 17.14 12.361 0 5.191-2.664 8.808-6.419 10.652 5.395 1.504 8.947 5.535 8.947 11.886M364.963 101.921c0-10.584-7.922-18.37-18.507-18.37-10.723 0-18.643 7.786-18.643 18.37 0 10.586 7.92 18.372 18.643 18.372 10.585 0 18.507-7.786 18.507-18.372zm-43.979 0c0-14 10.79-24.445 25.472-24.445 14.545 0 25.336 10.38 25.336 24.445 0 14.067-10.79 24.45-25.336 24.45-14.683 0-25.472-10.45-25.472-24.45M392.5 78.02h6.828v41.862h25.883v5.942H392.5V78.02M448.375 83.963h-16.39V78.02h39.539v5.943h-16.39v41.861h-6.76V83.963M258.552 202.326l2.528-5.325c3.55 3.21 9.628 5.531 15.775 5.531 8.262 0 11.813-3.21 11.813-7.375 0-11.676-28.953-4.3-28.953-22.058 0-7.375 5.734-13.655 18.3-13.655 5.6 0 11.404 1.501 15.365 4.232l-2.253 5.464c-4.166-2.664-8.878-3.892-13.112-3.892-8.127 0-11.61 3.415-11.61 7.578 0 11.68 28.956 4.373 28.956 21.923 0 7.306-5.872 13.59-18.506 13.59-7.307 0-14.478-2.46-18.303-6.013M355.673 183.89c0-10.585-7.921-18.37-18.506-18.37-10.722 0-18.643 7.785-18.643 18.37s7.921 18.37 18.643 18.37c10.585 0 18.506-7.785 18.506-18.37zm-43.978 0c0-14 10.79-24.446 25.472-24.446 14.546 0 25.334 10.379 25.334 24.445 0 14.068-10.788 24.45-25.334 24.45-14.682 0-25.472-10.45-25.472-24.45M382.801 187.17v-27.182h6.828v26.907c0 10.584 4.85 15.365 13.454 15.365 8.605 0 13.521-4.781 13.521-15.365v-26.907h6.624v27.181c0 13.862-7.579 21.17-20.213 21.17-12.566 0-20.214-7.308-20.214-21.17M479.24 176.65c0-6.827-4.576-10.72-13.316-10.72h-11.61v21.512h11.61c8.74 0 13.316-3.96 13.316-10.792zm.204 31.142l-10.31-14.684c-.958.07-1.98.14-3.006.14h-11.813v14.544h-6.828v-47.804h18.641c12.43 0 19.941 6.283 19.941 16.662 0 7.376-3.825 12.705-10.517 15.093l11.336 16.05h-7.444M503.496 183.89c0-14.135 10.79-24.446 25.335-24.446 7.376 0 13.796 2.527 18.165 7.441l-4.44 4.304c-3.687-3.893-8.193-5.669-13.452-5.669-10.787 0-18.779 7.785-18.779 18.37s7.992 18.37 18.779 18.37c5.259 0 9.765-1.843 13.452-5.736l4.44 4.301c-4.37 4.918-10.79 7.513-18.233 7.513-14.476 0-25.267-10.312-25.267-24.449M601.712 201.85v5.942h-34.693v-47.804h33.734v5.941h-26.906v14.684h23.972v5.804h-23.972v15.432h27.865"
                fill="#5eb6b9"
              />
              <path
                d="M148.46 44.695l-9.673 29.644a76.234 76.234 0 0143.085 68.776c0 42.08-33.888 76.194-75.69 76.194s-75.69-34.113-75.69-76.194c0-28.194 15.222-52.791 37.832-65.97l1.278-35.1C28.998 56.925 0 96.124 0 142.143 0 200.96 47.364 248.64 105.79 248.64c58.426 0 105.79-47.68 105.79-106.497 0-43.527-25.952-80.931-63.12-97.448"
                fill="#5eb6ba"
              />
              <path
                d="M97.74 157.204l28.567-87.54 9.086-27.847a11267.84 11267.84 0 01-12.173 4.98l-1.024.424c-6.308 2.616-12.09 5.014-18.771 7.783l5.015-19.29 9.285-35.71c-11.8 6.483-22.926 12.539-33.961 18.753l-.706 19.383-1.194 32.823-.73 20.044 19.98-11.11c-1.565 28.119-3.374 77.307-3.374 77.307"
                fill="#5eb6ba"
              />
            </svg>
          </div>

          <p className="mt-xl lg:mt-2xl text-center leading-normal">
            <strong>GraphQL Texas</strong> is brought to you by{' '}
            <a
              href="https://boltsource.io"
              target="_blank"
              rel="noopener noreferrer"
              className="typography-link-contrast"
            >
              BoltSource
            </a>
          </p>
        </div>
      </Grid>

      <svg
        width="821"
        height="680"
        viewBox="0 0 821 680"
        fill="none"
        className="w-half-screen h-auto absolute bottom-0 right-0"
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
  )
}

export default EventInfo
