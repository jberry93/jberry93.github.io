import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

const bodyStyle: {backgroundColor: string;} = {backgroundColor: '#212121'};

export default class extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link
                        rel="shortcut icon"
                        sizes="192x192"
                        href="../static/myPic192.jpg"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.6.3/css/brands.css"
                        integrity="sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css"
                        integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body style={bodyStyle}>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}