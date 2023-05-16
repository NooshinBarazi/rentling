import React, { useRef } from 'react';
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
  const filteredCardsRef = useRef<HTMLDivElement>(null);
  const housefilterref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Main>
        <Hero housefilterref={housefilterref} />
        <Information />
        <LatestSlider />
        <HouseForm
          housefilterref={housefilterref}
          filteredCardsRef={filteredCardsRef}
        />
      </Main>
      <Footer>
        <FooterItems />
      </Footer>
    </>
  );
};
