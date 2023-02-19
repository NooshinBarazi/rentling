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
  TextIcon,
  DateDayIcon,
  DateMonthIcon,
} from '@rentling/fr-shared';

interface Props {
  title: any;
  address: any;
  rooms: any;
  bathrooms: any;
  parking: any;
  area: any;
  url: any;
}

export const SliderCard = ({
  title,
  address,
  rooms,
  bathrooms,
  parking,
  area,
  url,
}: Props) => {
  return (
    <div className={styles.slider_card}>
      <div className={styles.card_title}>
        <p>{title}</p>
      </div>
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
            {area}
            <span>ft²</span>
          </p>
        </div>
      </div>
      <div className={styles.card_price}>
        <div className={styles.card_date}>
          <DateDayIcon />
          <h4>255</h4>
          <p>$/day</p>
        </div>
        <div className={styles.card_date}>
          <DateMonthIcon />
          <h4>7,100</h4>
          <p>$/day</p>
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
