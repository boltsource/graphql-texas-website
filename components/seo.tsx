import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'
import removeMd from 'remove-markdown'

export const SEOConfig = {
  url: 'https://graphql-texas.org',
  title: 'GraphQL Texas',
  twitter: '@GraphQL_TX',
  description:
    'Welcome GraphQL experts and newcomers! We’re an online and in-person GraphQL enthusiast group located in Texas, hosting live or virtual speaking events on a range of topics. You can join us in person if possible or on one of our live streams. Look out for our virtual happy hours and other networking events.',
  images: ['images/card.png'],
}

type SEOProps = NextSeoProps & {
  slug?: string
  image?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  slug,
  image,
  openGraph,
  ...props
}) => {
  const metaTitle = title ?? SEOConfig.title
  const metaDescription = removeMd(description ?? SEOConfig.description)
  const metaUrl = [SEOConfig.url, slug].filter(Boolean).join('/')

  const metaImages = (image ? [image] : SEOConfig.images).map((image) => ({
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
        images: metaImages,
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
