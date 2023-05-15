import { useState } from 'react';
import styles from './CurrentRental.module.scss';
import Image from 'next/image';

import {
  DateMonthIcon,
  CalenderIcon,
  StayTimeIcon,
  Rating,
  TextIcon,
  Button,
  FindHomeIcon,
  MoreInfo,
  MoreInfoProps,
} from '@rentling/fr-shared';

interface CurrentRentalProps {
  title: string;
  img: string;
  region: string;
  city: string;
  address: string;
  price: string;
  duration: string;
  startDate: string;
  endDate: string;
  rental: MoreInfoProps;
}

export const CurrentRental = ({
  title,
  img,
  region,
  city,
  address,
  price,
  duration,
  startDate,
  endDate,
  rental,
}: CurrentRentalProps) => {
  const [rating, setRating] = useState(0);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header_content}>
          <h4>YOUR CURRENT HOUSE</h4>
        </div>
        <div className={styles.main_content}>
          <h4>{title}</h4>
          <div className={styles.house_info}>
            <Image
              src={img}
              alt={'Picture of the House'}
              width={'249'}
              height={'150'}
            />
            <div className={styles.location_house}>
              <h5>
                {region}, {city}
              </h5>
              <p>{address}</p>
              <div>
                <TextIcon
                  Icon={<DateMonthIcon />}
                  title={'Monthly Price was'}
                  text={`${price} $`}
                  newStyle={styles.house_price}
                />
              </div>
              <TextIcon
                Icon={<StayTimeIcon />}
                title={'stayed for'}
                text={duration}
                newStyle={styles.house_duration}
              />
            </div>
          </div>
          <div className={styles.house_details}>
            <div className={styles.rental_period}>
              <p>your rating :</p>
              <Rating
                count={5}
                value={rating}
                onChange={(value) => setRating(value)}
              />
            </div>

            <div className={styles.rental_period}>
              <p>rental period :</p>
              <div className={styles.rental_date}>
                <CalenderIcon />
                <p>{startDate}</p>
              </div>
              <p>to</p>
              <div className={styles.rental_date}>
                <CalenderIcon />
                <p>{endDate}</p>
              </div>
              <span>( 13 days left )</span>
            </div>
            {/* details */}
            <MoreInfo {...rental} />
          </div>
          {/* details */}
        </div>
      </div>
    </section>
  );
};

export const EmptyCurrentRental = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header_content}>
          <h4>YOUR CURRENT HOUSE</h4>
        </div>
        <div className={styles.empty_content}>
          <p className={styles.empty_text}>
            You are not currently on a trip, so why not pack your bags and{' '}
            <br /> start a new journey?
          </p>
          <Image
            alt="empty page"
            src={'/images/emptypage.avif'}
            width={'800'}
            height={'367'}
          />
          <Button
            Icon={<FindHomeIcon />}
            text={'Find your house'}
            newStyle={''}
            onClick={() => console.log('clicked')}
          />
        </div>
      </div>
    </section>
  );
};
