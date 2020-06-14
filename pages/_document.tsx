import React from 'react';
import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme';
import { ServerStyleSheet } from 'styled-components';
import flush from 'styled-jsx/server';

//! Resolution order
//
// On the server:
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. document.getInitialProps
// 4. app.render
// 5. page.render
// 6. document.render
//
// On the server with error:
// 1. document.getInitialProps
// 2. app.render
// 3. page.render
// 4. document.render
//
// On the client
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. app.render
// 4. page.render

export default class Document extends NextDocument {
    static getInitialProps = async (ctx: DocumentContext) => {
        const sheet = new ServerStyleSheet();
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(sheets.collect(<App {...props} />)),
                });

            const initialProps = await NextDocument.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}

                        {sheets.getStyleElement()}
                        {sheet.getStyleElement()}
                        {flush() || null}
                    </>
                ),
            };
        } finally {
            // sheet.seal();
        }
    };

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="shortcut icon"
                        type="image/x-icon"
                        href="favicon.ico"
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
