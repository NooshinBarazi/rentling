import { HouseImageSlider } from '@rentling/fr-shared';
import { Seattle } from '../../svgs/Seattle';
import styles from './LatestSlider.module.scss';
import {houses } from '../../../../../server/data/houses';
import { useEffect, useState } from 'react';

const cities = ['New York', 'Chicago'];

export const LatestSlider = () => {
  const [cityName, setCityName] = useState('New York' || 'Chicago');

  useEffect(() => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    setCityName(randomCity);
  }, [cityName]);

  const filteredHouses = houses.filter((house) => {
    return house.feature.region === 'USA' && house.feature.city === cityName;
  });

  return (
    <section className={styles.slider}>
      <div className={styles.skyline}>
        <Seattle />
      </div>
      <HouseImageSlider cityName={cityName} houses={filteredHouses} />
    </section>
  );
};
