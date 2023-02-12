import React from 'react';
import styles from './SliderCard.module.scss';
import Link from 'next/link';
import {
  BedIcon,
  BathroomIcon,
  CarIcon,
  SqFeetIcon,
  LikeIcon,
  ShareIcon,
} from '@rentling/fr-shared';

interface Props {
  address: any;
  rooms: any;
  bathrooms: any;
  parking: any;
  sqfeet: any;
  url: any;
}

export const SliderCard = ({
  address,
  rooms,
  bathrooms,
  parking,
  sqfeet,
  url,
}: Props) => {
  return (
    <div className={styles.slider_card}>
      <div className={styles.card_address}>
        <p>{address}</p>
      </div>
      <div className={styles.card_items}>
        <div className={styles.card_item}>
          <BedIcon />
          <p>{rooms}</p>
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
            {sqfeet}
            <span>ft²</span>
          </p>
        </div>
      </div>
      <div className={styles.card_buttons}>
        <Link href={`/${url}`}>
          <button>
            <p>Reserve</p>
          </button>
        </Link>
        <div className={styles.share_icon}>
          <ShareIcon />
        </div>
        <div className={styles.like_icon}>
          <LikeIcon />
        </div>
      </div>
    </div>
  );
};
