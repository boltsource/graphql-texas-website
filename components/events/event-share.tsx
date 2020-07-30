import React from 'react'
import * as share from 'react-share'

import Grid from '@components/ui/grid'

const EventShare: React.FC = () => {
  const url = document.location.href

  return (
    <div className="py-xl lg:py-2xl">
      <Grid>
        <div className="col-start-1 col-end-7 lg:col-start-5 lg:col-end-9 flex flex-col items-center">
          <h2 className="text-lg lg:text-xl text-cinder-alpha-50 font-light">
            Share
          </h2>

          <div className="flex justify-around mt-lg lg:mt-xl self-stretch">
            <share.TwitterShareButton url={url}>
              <share.TwitterIcon round />
            </share.TwitterShareButton>
            <share.FacebookShareButton url={url}>
              <share.FacebookIcon round />
            </share.FacebookShareButton>
            <share.LinkedinShareButton url={url}>
              <share.LinkedinIcon round />
            </share.LinkedinShareButton>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default EventShare
