import { TextIcon } from 'libs/fr-shared/src/components/elements/TextIcon/TextIcon';
import styles from './UserProfile.module.scss';
import {
  CurrentDateIcon,
  UserProfileIcon,
  HouseIcon,
  FavoritesIcon,
  PaymentIcon,
  SecurityIcon,
} from '@rentling/fr-shared';

export const UserProfile = () => {

  return (
    <section className={styles.profile_section}>
      <div className={styles.container}>
        <div className={styles.profile_info}>
          <h4>JOHN DOE</h4>
          <p>JohnDoe@gmail.com</p>
        </div>
        <div className={styles.profile_box}>
          <TextIcon
            Icon={<UserProfileIcon />}
            title={'Profile info'}
            text={'Provide personal details and how we can reach you'}
            newStyle={''}
          />
          <TextIcon
            Icon={<CurrentDateIcon />}
            title={'current rental'}
            text={'Your current rental house profile and details'}
            newStyle={''}
          />
          <TextIcon
            Icon={<HouseIcon />}
            title={'rental history'}
            text={
              'your rental history of houses you stayed and details such as price, rental period and et.c'
            }
            newStyle={''}
          />
          <TextIcon
            Icon={<FavoritesIcon />}
            title={'Favorites'}
            text={'Your favorite houses in your wishlist'}
            newStyle={''}
          />
          <TextIcon
            Icon={<PaymentIcon />}
            title={'payments'}
            text={'Review payments, payouts, coupons, and gift cards'}
            newStyle={''}
          />
          <TextIcon
            Icon={<SecurityIcon />}
            title={'Login & security'}
            text={'Update your password and secure or delete your account'}
            newStyle={''}
          />
        </div>
      </div>
    </section>
  );
};
