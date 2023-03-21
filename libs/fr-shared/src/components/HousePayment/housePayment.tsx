import Image from 'next/image';
import house1 from '../HousePayment/image/house1.jpg';
import house2 from '../HousePayment/image/house2.jpg';
import house3 from '../HousePayment/image/house3.jpg';
import house4 from '../HousePayment/image/house4.jpg';
import styles from './HousePayment.module.scss';
import { SlideImage, HouseDetails, HousePrice, houses } from '@rentling/fr-shared';

export const HousePayment = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.side_left}>
          <SlideImage
            images={[house1,house2,house3,house4]}
          />
          <HouseDetails
            title="The Residences at NewCity"
            address="Anim quis esse sit est reprehenderit est reprehenderit."
            rooms={2}
            bathrooms={2}
            parking={0}
            area="1,687"
            discribtion="Large suburban house in central London. Fully furnished with
            outdoor patio, heating insulation and two spacious decks.
            Walking distance to everything you might need in your stay in
            London!"
          />
        </div>
        <div className={styles.side_right}>
          <HousePrice />
        </div>
      </section>
    </>
  );
};
