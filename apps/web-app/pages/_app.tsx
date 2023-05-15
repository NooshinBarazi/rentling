import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import React from 'react';
import { AuthProvider, DesktopNavbar, Header } from '@rentling/fr-shared';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<any>;
  };
};

function CustomApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Welcome to Rentling</title>
        </Head>
        <Header>
          <DesktopNavbar />
        </Header>
        <main className="app">
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </main>
      </AuthProvider>
    </>
  );
}

export default CustomApp;
