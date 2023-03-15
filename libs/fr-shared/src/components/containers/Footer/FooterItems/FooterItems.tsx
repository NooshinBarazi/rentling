import React from 'react';
import styles from './FooterItems.module.scss';
import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
  CallIcon,
  LogoIcon,
} from '@rentling/fr-shared';
import Link from 'next/link';

interface Props {}

export const FooterItems = (props: Props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.social_media}>
        <p>Follow us on</p>
        <Link href="/">
          <InstagramIcon />
        </Link>
        <Link href="/">
          <TwitterIcon />
        </Link>
        <Link href={'/'}>
          <FaceBookIcon />
        </Link>
      </div>
      <div className={styles.contact}>
        <p> 7/24 ready to help you </p>
        <Link href={'/'} className={styles.mail}>
          <MailIcon className={styles.mail_icon} />
          <h3> RentalHouse@info.com </h3>
        </Link>
        <Link href={'/'} className={styles.call}>
          <CallIcon className={styles.call_icon} />
          <h3>{`+1 (212) - 123 - 4567`}</h3>
        </Link>
      </div>
      <div className={styles.credit}>
        <LogoIcon href={'/'} />
        <p>{`2023 © Rentaling`}</p>
      </div>
    </div>
  );
};
