import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import React from 'react';
import { Provider } from 'react-redux';
import {
  AuthProvider,
  DesktopNavbar,
  Header,
  wrapper,
  store,
} from '@rentling/fr-shared';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<any>;
  };
};

function CustomApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      <Head>
        <title>Welcome to Rentling</title>
      </Head>

      <Provider store={store}>
        <AuthProvider>
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
      </Provider>
    </>
  );
}

export default wrapper.withRedux(CustomApp);
