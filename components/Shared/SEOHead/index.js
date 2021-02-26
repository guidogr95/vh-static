import { apiUrl } from 'config/constants'
import Head from 'next/head'

const SEOHead = ({ FacebookSeo, GoogleSEO, TwitterSeo }) => {

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {GoogleSEO?.Title && <title>{GoogleSEO.Title}</title>}
            {GoogleSEO?.Description && <meta name="description" content={GoogleSEO.Description}/>}

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website"/>
            {FacebookSeo?.Description && <meta property="og:description" content={FacebookSeo.Description}/>}
            {FacebookSeo?.Url && <meta property="og:url" content={FacebookSeo.Url}/>}
            {FacebookSeo?.SiteName && <meta property="og:site_name" content={FacebookSeo.SiteName}/>}
            {FacebookSeo?.Image && <meta property="og:image" content={`${apiUrl}${FacebookSeo.Image.url}`} />}

            <meta name="twitter:card" content="summary_large_image"/>
            {TwitterSeo?.Description && <meta name="twitter:description" content={TwitterSeo.Description}/>}
            {TwitterSeo?.Title && <meta name="twitter:title" content={TwitterSeo.Title}/>}
            {TwitterSeo?.Site && <meta name="twitter:site" content={TwitterSeo.Site}/>}
            {TwitterSeo?.Image && <meta name="twitter:image" content={`${apiUrl}${TwitterSeo.Image.url}`}/>}
            {TwitterSeo?.Creator && <meta name="twitter:creator" content={TwitterSeo.Creator}/>}
        </Head>
    )
}

export default SEOHead