import styles from './ProfileTemplate.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  CurrentDateIcon,
  FavoritesIcon,
  HouseIcon,
  PaymentIcon,
  SecurityIcon,
  UserProfileIcon,
} from '@rentling/fr-shared';
import React from 'react';


export const ProfileTemplate = ({children }: {children: React.ReactNode}) => {
  const router = useRouter();
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.profile_nav}>
          <nav>
            <Link href="/profile">
              <li
                className={
                  router.pathname === '/profile'
                    ? styles.nav_item_active
                    : styles.nav_item
                }
              >
                <UserProfileIcon />
                <h4>Profile</h4>
                
              </li>
            </Link>
            <Link href="/profile/current/" as={`/profile/current/`}>
              <li
                className={
                  router.pathname === '/profile/current/'
                    ? styles.nav_item_active
                    : styles.nav_item
                }
              >
                <CurrentDateIcon />
                <h4>current rental</h4>
              </li>
            </Link>
            <Link href="/profile/fav">
              <li
                className={
                  router.pathname === '/profile/fav'
                    ? styles.nav_item_active
                    : styles.nav_item
                }
              >
                <FavoritesIcon />
                <h4>Favorites</h4>
              </li>
            </Link>

            <Link href="/profile/history/" as={`/profile/history/`}>
              <li
                className={
                  router.pathname === '/profile/history/'
                    ? styles.nav_item_active
                    : styles.nav_item
                }
              >
                <HouseIcon />
                <h4>rental history</h4>
              </li>
            </Link>
            <Link href="/profile/payment">
              <li
                className={
                  router.pathname === '/profile/payment'
                    ? styles.nav_item_active
                    : styles.nav_item
                }
              >
                <PaymentIcon />
                <h4>payments</h4>
              </li>
            </Link>
            <Link href="/profile/security">
              <li
                className={
                  router.pathname === '/profile/security'
                    ? styles.nav_item_active
                    : styles.nav_item
                }
              >
                <SecurityIcon />
                <h4>Login & security</h4>
              </li>
            </Link>
          </nav>
        </div>
        <div className={styles.profile_content}>{children}</div>
      </div>
    </section>
  );
};
