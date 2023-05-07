import styles from './EmptyPageFavoriteHouses.module.scss';
import Image from 'next/image';
import homeImage from './Image/homeImage.jpg';
import { Button } from '@rentling/fr-shared';
import { PrimaryButtonIcon } from '@rentling/fr-shared';
import { ChooseDropdown, houses } from '@rentling/fr-shared';

export const EmptyPageFavoriteHouses = () => {

  const FindYourHouse = () => {};


  return (
    <>
      <div className={styles.container_favorite_houses}>
        <div className={styles.header_container}>
          <div className={styles.header_favorite_houses}>
            <p>your favorite houses</p>
          </div>
        </div>

        <div className={styles.not_home_container}>
          <div className={styles.text_container}>
            <p>
              There are no favorite houses yet. let's explore to find ones that
              fit for you!
            </p>
          </div>
          <div className={styles.image_container}>
            <Image src={homeImage} alt="/" fill object-fit="cover" />
          </div>
          <div className={styles.reserve_button}>
            <Button
              Icon={<PrimaryButtonIcon />}
              text="Find your house"
              newStyle=""
              onClick={() => FindYourHouse()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
