import React from 'react';
import styles from './HouseCard.module.scss';
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
  Button,
} from '@rentling/fr-shared';
import Image from 'next/image';

interface Props {
  title: any;
  address: any;
  bedrooms: any;
  bathrooms: any;
  parking: any;
  area: any;
  url: any;
  thirtyDay: any;
  oneDay: any;
  image: any;
}

export const HouseCard = ({
  title,
  address,
  bedrooms,
  bathrooms,
  parking,
  area,
  url,
  thirtyDay,
  oneDay,
  image,
}: Props) => {
  return (
    <article className={styles.house_card}>
      <div className={image ? styles.card_image : styles.display_none}>
        <Image src={image} alt="Picture of house" fill object-fit="cover" />
      </div>
      <div className={styles.card_details}>
        <div className={title ? styles.card_title : styles.display_none}>
          <p>{title}</p>
        </div>
        <div className={styles.card_address}>
          <p>{address}</p>
        </div>
        <div className={styles.card_features}>
          <div className={styles.card_feat}>
            <BedIcon />
            <p>{bedrooms}</p>
          </div>
          <div className={styles.card_feat}>
            <BathroomIcon />
            <p>{bathrooms}</p>
          </div>
          <div className={styles.card_feat}>
            <CarIcon />
            <p>
              {parking ? 'with' : 'without'}
              <span>parking</span>
            </p>
          </div>
          <div className={styles.card_feature}>
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
            <h4>{oneDay}</h4>
            <p>$/day</p>
          </div>
          <div className={styles.card_date}>
            <DateMonthIcon />
            <h4>{thirtyDay}</h4>
            <p>$/month</p>
          </div>
        </div>

        <div className={styles.card_buttons}>
          <Link href={`/`}>
            <Button
              text="Reserve"
              Icon={undefined}
              newStyle={''}
              onClick={() => {}}
            />
          </Link>
          <div className={styles.share_icon}>
            <ShareIcon />
          </div>
          <div className={styles.like_icon}>
            <LikeIcon />
          </div>
        </div>
      </div>
    </article>
  );
};
