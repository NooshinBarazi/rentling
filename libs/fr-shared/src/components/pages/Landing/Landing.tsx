import React from 'react';
import {
  Hero,
  Information,
  LatestSlider,
  Main,
  HouseForm,
  Footer,
  FooterItems,
} from '@rentling/fr-shared';

interface Props {}

export const Landing = (props: Props) => {
  return (
    <>
      <Main>
        <Hero />
        <Information />
        <LatestSlider />
        <HouseForm />
      </Main>
      <Footer>
        <FooterItems />
      </Footer>
    </>
  );
};
