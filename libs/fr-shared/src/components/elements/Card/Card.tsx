import {
  BathroomIcon,
  BedIcon,
  CarIcon,
  ShareIcon,
  SqFeetIcon,
  LikeIcon,
  DateDayIcon,
  DateMonthIcon,
  TextIcon,
  Button,
  SliderCard,
} from '@rentling/fr-shared';
import { houses } from './data';
import styles from './Card.module.scss';
import Image from 'next/image';
import { hostname } from 'os';

export const Card = () => {
  return (
    <section className={styles.result}>
      <div className={styles.sort_item}>
        <p>sort by:</p>
        <select>
          <option>cheaper</option>
        </select>
      </div>
      <div className={styles.cards}>
      {houses.map((house: any) => (
        <div className={styles.house}>
          <div className={styles.card_img}>
            <Image
              src={house.img}
              alt="Picture of house"
              fill
              object-fit="cover"
            />
          </div>
          <div className={styles.card_info}>
            {/* <div className={styles.card_text}>
              <h4>{house.title}</h4>
              <p>{house.describtion}</p>
            </div>
            <div className={styles.card_icon}>
              <TextIcon Icon={<BedIcon />} text={house.feature.bed} />
              <TextIcon Icon={<BathroomIcon />} text={house.feature.bathroom} />
              <TextIcon Icon={<CarIcon />} text={house.feature.parking} />
              <TextIcon Icon={<SqFeetIcon />} text={house.feature.meterage} />
            </div>
            <div className={styles.card_price}>
              <TextIcon Icon={<DateDayIcon />} text={house.price.oneDay} />
              <TextIcon Icon={<DateMonthIcon />} text={house.price.thrityDay} />
            </div>
            <div className={styles.card_button}>
              <Button
                Icon={undefined}
                text="Reserve "
                onClick={() => console.log('onclick')}
              />
              <div className={styles.card_share}>
                <span>{<ShareIcon />}</span>
                <span>{<LikeIcon />}</span>
              </div> 
            </div>*/}
            <SliderCard
            title={house.title}
              address={house.describtion}
              rooms={house.feature.bed}
              bathrooms={house.feature.bathroom}
              parking={house.feature.parking}
              area={house.feature.meterage}
              url={undefined}
            />
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};
