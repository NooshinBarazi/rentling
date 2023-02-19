import React from 'react';
import styles from './Hero.module.scss';
import { PrimaryButtonIcon } from '@rentling/fr-shared';
import { Sanfrancisco } from '../../svgs/Sanfrancisco';

export const Hero = () => {
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
            <button>
              <p>Find my house</p>
              <span>
                <PrimaryButtonIcon />
              </span>
            </button>
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
