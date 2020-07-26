import React from 'react'

import SEO from '@components/seo'
import ErrorMessage from '@components/ui/error-message'
import Layout from '@components/ui/layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Not found" />
      <ErrorMessage
        title="Not found"
        message="The page you are looking for does not exist."
      />
    </Layout>
  )
}

export default NotFoundPage
