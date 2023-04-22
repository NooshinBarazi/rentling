import React from 'react';
import {
  BedIcon,
  BathroomIcon,
  CarIcon,
  SqFeetIcon,
} from '@rentling/fr-shared';
import styles from './houseDetails.module.scss';
import { LocationIcon } from '../../../elements/Icons/LocationIcon';

interface Props {
  title: string;
  address: string;
  bedroom: number;
  bathrooms: number;
  parking: boolean;
  area: string;
  description: string;
}
export const HouseDetails = ({
  title,
  address,
  bedroom,
  bathrooms,
  parking,
  area,
  description,
}: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.card_title}>
        <p>{title}</p>
      </div>
      <div className={styles.card_address}>
        <div className={styles.location_icon}>
          <LocationIcon />
        </div>
        <p>{address}</p>
      </div>
      <div className={styles.card_items}>
        <div className={styles.card_item}>
          <BedIcon />
          <p>{bedroom}</p>
        </div>
        <div className={styles.card_item}>
          <BathroomIcon />
          <p>{bathrooms}</p>
        </div>
        <div className={styles.card_item}>
          <CarIcon />
          <p>
            {parking ? 'with' : 'without'}
            <span>parking</span>
          </p>
        </div>
        <div className={styles.card_item}>
          <SqFeetIcon />
          <p>
            {area}
            <span>ft²</span>
          </p>
        </div>
      </div>
      <div className={styles.card_detail}>
        <span>About this house:</span>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
