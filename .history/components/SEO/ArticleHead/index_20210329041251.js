// Utils
import Head from 'next/head'

const ArticleHead = ({ categories, Tags }) => {
    return (
        <Head>
            <meta property="og:type" content="article"/>
            { Tags && Tags.map(tag => <meta key={tag.id} property="article:tag" content={tag.Name} />) }
            { categories && categories.map(category => <meta key={category.id} property="article:section" content={category.Name} />) }
            <meta property="article:publisher" content="https://www.facebook.com/vexxhostinc/"></meta>
            <meta property="og:type" content="article"></meta>
        </Head>
    )
}

export default ArticleHead