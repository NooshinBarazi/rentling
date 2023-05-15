import React from 'react';
import {
  Header,
  DesktopNavbar,
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
      <Header>
        <DesktopNavbar />
      </Header>
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
