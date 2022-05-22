import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-bg-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
