import React, { useEffect } from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import theme from '../theme';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import graphqlClient from '../graphql/graphqlClient';
import { ValidationSchemasProvider } from '../context/ValidationSchemas';
import { LoadingProvider } from '../context/Loading/Loading';

const App = ({ Component, pageProps }: AppPropsType) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles!.parentNode!.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>mindle</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ValidationSchemasProvider>
                <ApolloProvider client={graphqlClient()}>
                    <StylesProvider injectFirst>
                        <ThemeProvider theme={theme}>
                            <LoadingProvider>
                                <CssBaseline />
                                <Component {...pageProps} />
                            </LoadingProvider>
                        </ThemeProvider>
                    </StylesProvider>
                </ApolloProvider>
            </ValidationSchemasProvider>
        </>
    );
};

export default App;
