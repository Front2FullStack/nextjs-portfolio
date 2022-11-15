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

          <meta
            name="title"
            content="Sushil Parajuli —  Front-End Developer, FullStack Developer, JS Programmer"
          />
          <meta
            name="description"
            content="I have been a professional Front-End Developer at established software companies for the past few years, using JavaScript frameworks like React, and Vue"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta
            property="og:title"
            content="Sushil Parajuli — Front-End Developer, FullStack Developer, JS Programmer"
          />
          <meta
            property="og:description"
            content="I have been a professional Front-End Developer at established software companies for the past few years, using JavaScript frameworks like React, and Vue"
          />
          <meta
            property="og:image"
            content="https://media-exp1.licdn.com/dms/image/C5603AQFWpMj8MMnO_w/profile-displayphoto-shrink_400_400/0/1604857968934?e=1674086400&v=beta&t=E9uSz-i-qTJ5RUMYU4cG334pClWXjT4b4GLC2JaKbeM"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta
            property="twitter:title"
            content="Sushil Parajuli — Front-End Developer, FullStack Developer, JS Programmer"
          />
          <meta
            property="twitter:description"
            content="I have been a professional Front-End Developer at established software companies for the past few years, using JavaScript frameworks like React, and Vue"
          />
          <meta
            property="twitter:image"
            content="https://media-exp1.licdn.com/dms/image/C5603AQFWpMj8MMnO_w/profile-displayphoto-shrink_400_400/0/1604857968934?e=1674086400&v=beta&t=E9uSz-i-qTJ5RUMYU4cG334pClWXjT4b4GLC2JaKbeM"
          />
        </Head>
        <title>
          Sushil Parauli — Front-End Developer, FullStack Developer, JS
          Programmer
        </title>
        <body className="bg-fixed bg-gradient-to-r from-bg-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
