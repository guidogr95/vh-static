import Head from 'next/head'

const SEOHead = ({ FacebookSEO, GoogleSEO, TwitterSEO }) => {
    console.log(GoogleSEO)
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {GoogleSEO?.Title && <title>{GoogleSEO.Title}</title>}
            {GoogleSEO?.Description && <meta name="description" content={GoogleSEO.Description}/>}

            {FacebookSEO?.Title && <meta property="og:title" content={FacebookSEO.Title}/>}
            {FacebookSEO?.Description && <meta property="og:description" content={FacebookSEO.Description}/>}
            {FacebookSEO?.Url && <meta property="og:url" content={FacebookSEO.Url}/>}
            {FacebookSEO?.SiteName && <meta property="og:site_name" content={FacebookSEO.SiteName}/>}
            {FacebookSEO?.Image && <meta property="og:image" content={FacebookSEO.Image.url} />}

            <meta name="twitter:card" content="summary_large_image"/>
            {TwitterSEO?.Description && <meta name="twitter:description" content={TwitterSEO.Description}/>}
            {TwitterSEO?.Title && <meta name="twitter:title" content={TwitterSEO.Title}/>}
            {TwitterSEO?.Site && <meta name="twitter:site" content={TwitterSEO.Site}/>}
            {TwitterSEO?.Image && <meta name="twitter:image" content={TwitterSEO.Image.url}/>}
            {TwitterSEO?.Creator && <meta name="twitter:creator" content={TwitterSEO.Creator}/>}
        </Head>
    )
}

export default SEOHead