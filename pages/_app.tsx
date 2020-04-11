import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../theme';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

const App = ({ Component, pageProps }: AppPropsType) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles!.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Mindle</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;