import React from 'react'

import SEO from '@components/seo'
import FullScreenMessage from '@components/ui/full-screen-message'
import Layout from '@components/ui/layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Not found" />
      <FullScreenMessage message="The page you are looking for does not exist." />
    </Layout>
  )
}

export default NotFoundPage
