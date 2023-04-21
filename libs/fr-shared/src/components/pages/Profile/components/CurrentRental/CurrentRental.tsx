import { MouseEvent, useState } from 'react';
import styles from './CurrentRental.module.scss';
import Image from 'next/image';

import {
  CommentIcon,
  DateMonthIcon,
  CalenderIcon,
  StayTimeIcon,
  BedIcon,
  BathroomIcon,
  CarIcon,
  SqFeetIcon,
  Rating,
  TextIcon,
  Button,
  FindHomeIcon
} from '@rentling/fr-shared';

interface CurrentRentalProps {
  id: string;
  title: string;
  img: string;
  region: string;
  city: string;
  address: string;
  price: string;
  duration: string;
  startDate: string;
  endDate: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  area: string;
  description: string;
  comment: string;
}

export const CurrentRental = ({
  id,
  title,
  img,
  region,
  city,
  address,
  price,
  duration,
  startDate,
  endDate,
  bedrooms,
  bathrooms,
  parking,
  area,
  description,
  comment,
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

            <div className={styles.house_features}>
              <div className={styles.house_feature}>
                <BedIcon />
                <p>{bedrooms}</p>
              </div>
              <div className={styles.house_feature}>
                <BathroomIcon />
                <p>{bathrooms}</p>
              </div>
              <div className={styles.house_feature}>
                <CarIcon />
                <p>
                  {parking ? 'with' : 'without'}
                  <span>parking</span>
                </p>
              </div>
              <div className={styles.house_feature}>
                <SqFeetIcon />
                <p>
                  {area}
                  <span>ft²</span>
                </p>
              </div>
            </div>
            {/* feature */}
            <div className={styles.about_house}>
              <h4>About this house:</h4>
              <p>{description}</p>
            </div>
            {/* about */}
            <div className={styles.comments_house}>
              <h4>Your note about this house: </h4>
              <div>
                <p className={styles.text_comment}>{comment}</p>
                <CommentIcon />
              </div>
            </div>
            {/* comments */}
          </div>
          {/* details */}
        </div>
      </div>
    </section>
  );
};


export const EmptyCurrentRental = () => {
  return(
    <section>
    <div className={styles.container}>
      <div className={styles.header_content}>
        <h4>YOUR CURRENT HOUSE</h4>
      </div>
      <div className={styles.empty_content}>
        <p className={styles.empty_text}>You are not currently on a trip, so why not pack your bags and <br /> start a new journey?</p>
        <Image alt='empty page' src={'/images/emptypage.avif'} width={'800'} height={'367'}/>
        <Button Icon={<FindHomeIcon />} text={'Find your house'} newStyle={''} onClick={() => console.log('clicked')} />
      </div>
    </div>
  </section>
  )
};
