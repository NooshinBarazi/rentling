import React, { useRef } from 'react';

import {
  Hero,
  Information,
  LatestSlider,
  Main,
  HouseForm,
  Footer,
  FooterItems,
} from '@rentling/fr-shared';

interface Props { }

export const Landing = ({ houses }) => {
  const filteredCardsRef = useRef<HTMLDivElement>(null);
  const housefilterref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Main>
        <Hero housefilterref={housefilterref} />
        <Information />
        <LatestSlider houses={houses} />
        <HouseForm
          houses={houses}
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
