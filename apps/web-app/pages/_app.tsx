import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../../../libs/fr-shared/src/store/store'

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};

function CustomApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <Provider store={store}>
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
      </Provider>
  );
}

export default CustomApp;
