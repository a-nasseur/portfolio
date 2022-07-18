import React from 'react'
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name='keywords' content={keywords} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Portfolio',
    keywords: 'web, developer, abdelhak, nasseur, freelance, algerien, algerian',
    description: 'Abdelhak NASSEUR Personal web developpement portfolio'
}

export default Meta