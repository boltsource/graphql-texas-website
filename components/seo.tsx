import { NextSeo, NextSeoProps } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const SEOConfig = {
  url: 'https://graphql-texas.org',
  title: 'GraphQL Texas',
  twitter: '@GraphQL_TX',
  description:
    'Welcome GraphQL experts and newcomers! We’re an online and in-person GraphQL enthusiast group located in Texas, hosting live or virtual speaking events on a range of topics. You can join us in person if possible or on one of our live streams. Look out for our virtual happy hours and other networking events.',
  images: ['images/card.png'],
}

type SEOProps = NextSeoProps & {
  image?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  openGraph,
  ...props
}) => {
  const { asPath } = useRouter()

  const metaTitle = title ?? SEOConfig.title
  const metaDescription = description ?? SEOConfig.description
  const metaUrl = [SEOConfig.url, asPath].join('')
  const metaImages = SEOConfig.images.map((image) => ({
    url: `${SEOConfig.url}/${image}`,
  }))

  return (
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      openGraph={{
        type: 'website',
        url: metaUrl,
        site_name: SEOConfig.title,
        title: title ?? SEOConfig.title,
        images: image ? [{ url: image }, ...metaImages] : metaImages,
        ...openGraph,
      }}
      twitter={{
        handle: SEOConfig.twitter,
        cardType: 'summary_large_image',
      }}
      {...props}
    />
  )
}

export default SEO
