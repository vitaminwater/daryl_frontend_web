import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Daryl</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="icon" 
            type="image/png" 
            href="/static/favicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <style>{`
            textarea, input, button { outline: none; }
            textarea:focus, input:focus, button:focus { outline: none; }
            body {margin: 0; padding: 0; overflow-x: hidden; font-family: Roboto Light, Helvetica Neue, Helvetica, Arial, sans-serif, -apple-system;}

            ::-webkit-input-placeholder { color:#D1D1D1; }
            ::-moz-placeholder { color:#D1D1D1; } /* firefox 19+ */
            :-ms-input-placeholder { color:#D1D1D1; } /* ie */
            input:-moz-placeholder { color:#D1D1D1; }
          `}</style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
