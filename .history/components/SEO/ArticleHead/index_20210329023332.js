// Utils
import Head from 'next/head'

const ArticleHead = ({ categories, Tags }) => {
    return (
        <Head>
            <meta property="og:type" content="article"/>
            { categories && categories.map(category => <meta key={category.id} property="article:section" content={category.Name} />) }
            { Tags && Tags.map(tag => <meta key={tag.id} property="article:tag" content={tag.Name} />) }
        </Head>
    )
}

export default ArticleHead