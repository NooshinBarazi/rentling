import React from 'react';
import styles from './Hero.module.scss';
import { Button, PrimaryButtonIcon } from '@rentling/fr-shared';
import { Sanfrancisco } from '../../svgs/Sanfrancisco';

interface HeroProps {
  housefilterref: any;
}
export const Hero = ({ housefilterref }: HeroProps) => {
  return (
    <div className={styles.hero_section}>
      <section className={styles.hero_container}>
        <div className={styles.hero_text}>
          <h1>
            Find a place <br /> you'll <span> love </span> to stay at
          </h1>
          <h3>Helping over 10 million renters to find their perfect fit.</h3>
          <div className={styles.hero_search}>
            <h3>Looking for a new place ?</h3>
            <Button
              onClick={() => {
                if (housefilterref.current) {
                  housefilterref.current.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
              text="Find my house"
              Icon={<PrimaryButtonIcon />}
            />
          </div>
        </div>

        <div className={styles.image_grid}>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
        </div>
      </section>
      <div className={styles.skyline}>
        <Sanfrancisco />
      </div>
    </div>
  );
};
