import React, { useEffect, useState } from 'react';
import {
  Header,
  DesktopNavbar,
  Hero,
  Information,
  LatestSlider,
  HouseImageSlider,
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
