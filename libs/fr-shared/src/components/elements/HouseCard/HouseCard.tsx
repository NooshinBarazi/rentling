import styles from './HouseCard.module.scss';
import Link from 'next/link';
import {
  BedIcon,
  BathroomIcon,
  CarIcon,
  SqFeetIcon,
  LikeIcon,
  DateDayIcon,
  DateMonthIcon,
  Button,
} from '@rentling/fr-shared';
import Image from 'next/image';
import { ShareModal } from './ShareModal';
import { useDispatch } from 'react-redux';
import { addFavorite } from 'libs/fr-shared/src/store/features/favoriteHousesSlice';

interface Props {
  id: any;
  title?: any;
  address: any;
  bedrooms: any;
  bathrooms: any;
  parking: any;
  area: any;
  url?: any;
  thirtyDay: any;
  oneDay: any;
  image?: any;
  region?: any;
  city?: any;
  selectedRegion?: any;
}

export const HouseCard = ({
  id,
  region,
  selectedRegion,
  city,
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
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
    const house = {
      id,
      image,
      title,
      region,
      price: {oneDay, thirtyDay} // Modify this based on the actual price property
    };

    dispatch(addFavorite(house));
  };

  return (
    <article className={styles.house_card}>
      <Link href={`/houses/${id}`} as={`/houses/${id}`}>
        {image && (
          <div className={styles.card_image}>
            <Image
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              src={image}
              alt="Picture of house"
              fill
              object-fit="cover"
            />
          </div>
        )}
      </Link>
      <div className={styles.card_details}>
        <div className={title ? styles.card_title : styles.display_none}>
          <p>{title}</p>
        </div>
        <div className={region ? styles.region_city : styles.display_none}>
          <p
            style={selectedRegion ? { display: 'none' } : { display: 'block' }}
          >
            {region},
          </p>
          <p>{city}</p>
        </div>
        <div className={styles.card_address}>
          <p>{address}</p>
        </div>
        <div className={styles.card_features}>
          <div className={styles.card_feature}>
            <BedIcon />
            <p>{bedrooms}</p>
          </div>
          <div className={styles.card_feature}>
            <BathroomIcon />
            <p>{bathrooms}</p>
          </div>
          <div className={styles.card_feature}>
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
          <Link href={`/houses/${id}`} as={`/houses/${id}`}>
            <Button
              text="See More"
              Icon={undefined}
              newStyle={''}
              onClick={() => {}}
            />
          </Link>
          <div className={styles.share_icon}>
            <ShareModal url={`${`localhost:4200/houses/`}${id}`} />
          </div>
          <div
            className={styles.like_icon}
            onClick={handleAddToFavorites}
          >
            <LikeIcon />
          </div>
        </div>
      </div>
    </article>
  );
};
