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

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

export const UserProfile = ({ firstName, lastName, email }: UserProfile) => {
  return (
    <section className={styles.profile_section}>
      <div className={styles.container}>
        <div className={styles.profile_info}>
          <h4>
            {firstName} {lastName}
          </h4>
          <p>{email}</p>
        </div>
        <div className={styles.profile_box}>
          <Link href="/profile/personal-info">
            <TextIcon
              Icon={<UserProfileIcon />}
              title={'Profile info'}
              text={'Provide personal details and how we can reach you'}
            />
          </Link>
          <Link href="/profile/current/">
            <TextIcon
              Icon={<CurrentDateIcon />}
              title={'current rental'}
              text={'Your current rental house profile and details'}
            />
          </Link>
          <Link href="/profile/history/">
            <TextIcon
              Icon={<HouseIcon />}
              title={'rental history'}
              text={
                'your rental history of houses you stayed and details such as price, rental period and et.c'
              }
            />
          </Link>
          <Link href="/profile/favorite-houses">
            <TextIcon
              Icon={<FavoritesIcon />}
              title={'Favorites'}
              text={'Your favorite houses in your wishlist'}
            />
          </Link>
          <Link href="/profile/payment">
            <TextIcon
              Icon={<PaymentIcon />}
              title={'payments'}
              text={'Review payments, payouts, coupons, and gift cards'}
            />
          </Link>
          <Link href="/profile/delete-account">
            <TextIcon
              Icon={<SecurityIcon />}
              title={'Login & security'}
              text={'Update your password and secure or delete your account'}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
