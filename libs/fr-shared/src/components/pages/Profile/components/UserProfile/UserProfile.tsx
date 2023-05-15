import styles from './UserProfile.module.scss';
import Link from 'next/link';
import {
  CurrentDateIcon,
  UserProfileIcon,
  HouseIcon,
  FavoritesIcon,
  PaymentIcon,
  SecurityIcon,
  TextIcon,
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
          <Link href="/profile/personalinfo">
            <TextIcon
              Icon={<UserProfileIcon />}
              title={'Profile info'}
              text={'Provide personal details and how we can reach you'}
              newStyle={''}
            />
          </Link>
          <Link href="/profile/current/">
            <TextIcon
              Icon={<CurrentDateIcon />}
              title={'current rental'}
              text={'Your current rental house profile and details'}
              newStyle={''}
            />
          </Link>
          <Link href="/profile/history/">
            <TextIcon
              Icon={<HouseIcon />}
              title={'rental history'}
              text={
                'your rental history of houses you stayed and details such as price, rental period and et.c'
              }
              newStyle={''}
            />
          </Link>
          <Link href="/profile/favorite">
            <TextIcon
              Icon={<FavoritesIcon />}
              title={'Favorites'}
              text={'Your favorite houses in your wishlist'}
              newStyle={''}
            />
          </Link>
          <Link href="/profile/payment">
            <TextIcon
              Icon={<PaymentIcon />}
              title={'payments'}
              text={'Review payments, payouts, coupons, and gift cards'}
              newStyle={''}
            />
          </Link>
          <Link href="/profile/delete-account">
            <TextIcon
              Icon={<SecurityIcon />}
              title={'Login & security'}
              text={'Update your password and secure or delete your account'}
              newStyle={''}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
