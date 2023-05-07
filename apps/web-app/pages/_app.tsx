import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import React from 'react';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};

function CustomApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      <Head>
        <title>Welcome to Rentling</title>
      </Head>
      <main className="app">
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </>
  );
}

export default CustomApp;
