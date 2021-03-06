import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en" >
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab|Roboto:100,300,400,500,700,900&display=swap"/>
            <link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
            <meta name="msapplication-TileColor" content="#6536ff" />
            <meta name="theme-color" content="#6536ff" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta property="og:locale" content="en_US" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3344191.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument