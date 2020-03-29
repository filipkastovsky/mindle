import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
    title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'Title',
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <header>
            <nav>
                <Link href="/">
                    <div>Home</div>
                </Link>
            </nav>
        </header>
        {children}
        <footer>
            <hr />
            <span>Footer</span>
        </footer>
    </div>
);

export default Layout;
