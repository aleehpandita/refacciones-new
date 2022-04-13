import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon.png"
          />

          <link rel="icon" href="favicon.png" />
          <link rel="manifest" href="manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
