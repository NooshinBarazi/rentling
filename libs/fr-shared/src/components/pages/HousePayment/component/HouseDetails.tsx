import React from 'react';
import {
  BedIcon,
  BathroomIcon,
  CarIcon,
  SqFeetIcon,
} from '@rentling/fr-shared';
import styles from './houseDetails.module.scss';

interface Props {
  title: string;
  address: string;
  bedroom: number;
  bathrooms: number;
  parking: boolean;
  area: string;
  description: string;
}
export const HouseDetails = ({
  title,
  address,
  bedroom,
  bathrooms,
  parking,
  area,
  description,
}: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.card_title}>
        <p>{title}</p>
      </div>
      <div className={styles.card_address}>
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.34256 19.4851C4.52079 19.9053 4.32459 20.3905 3.90434 20.5687C3.10221 20.9089 2.51313 21.2813 2.13726 21.6469C1.76358 22.0104 1.65306 22.3115 1.65306 22.5408C1.65306 22.7902 1.78488 23.1267 2.24094 23.531C2.69604 23.9345 3.40172 24.3356 4.34468 24.6892C6.22448 25.3941 8.8768 25.8469 11.8469 25.8469C14.8171 25.8469 17.4694 25.3941 19.3492 24.6892C20.2922 24.3356 20.9978 23.9345 21.4529 23.531C21.909 23.1267 22.0408 22.7902 22.0408 22.5408C22.0408 22.3108 21.9303 22.0101 21.5568 21.6471C21.1809 21.2817 20.5917 20.9095 19.789 20.5685C19.3689 20.39 19.173 19.9047 19.3515 19.4845C19.5301 19.0644 20.0153 18.8685 20.4355 19.047C21.3478 19.4347 22.1361 19.9049 22.709 20.4618C23.2844 21.021 23.6939 21.7225 23.6939 22.5408C23.6939 23.4327 23.2089 24.1834 22.5496 24.768C21.8893 25.3534 20.981 25.8428 19.9296 26.237C17.8207 27.0278 14.9628 27.5 11.8469 27.5C8.73106 27.5 5.87317 27.0278 3.76428 26.237C2.71288 25.8428 1.8046 25.3534 1.14431 24.768C0.484978 24.1834 0 23.4327 0 22.5408C0 21.7232 0.409507 21.0214 0.984612 20.462C1.55753 19.9047 2.346 19.434 3.25893 19.0468C3.67918 18.8686 4.16434 19.0648 4.34256 19.4851Z"
            fill="#585858"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8636 22.0931L12.8705 22.0862L12.887 22.0669L12.949 21.9981L13.1777 21.7418C14.3223 20.4382 15.4018 19.0787 16.4121 17.6684C17.2965 16.4286 18.203 15.0235 18.8931 13.6281C19.5681 12.2643 20.1122 10.7641 20.1122 9.37694C20.1122 4.45495 16.5058 0.5 11.8469 0.5C7.18806 0.5 3.58163 4.45357 3.58163 9.37694C3.58163 10.7641 4.12577 12.2643 4.80077 13.6281C5.49092 15.0235 6.39873 16.4286 7.28036 17.6684C8.35821 19.1716 9.51467 20.6168 10.7449 21.9981L10.8069 22.0669L10.8234 22.0862L10.8303 22.0931C10.9594 22.2343 11.1164 22.347 11.2915 22.4241C11.4665 22.5013 11.6557 22.5411 11.8469 22.5411C12.0382 22.5411 12.2274 22.5013 12.4024 22.4241C12.5774 22.347 12.7345 22.2343 12.8636 22.0931ZM11.8469 6.0102C11.1162 6.0102 10.4155 6.30047 9.89879 6.81716C9.38211 7.33384 9.09184 8.03461 9.09184 8.76531C9.09184 9.49601 9.38211 10.1968 9.89879 10.7135C10.4155 11.2301 11.1162 11.5204 11.8469 11.5204C12.5776 11.5204 13.2784 11.2301 13.7951 10.7135C14.3118 10.1968 14.602 9.49601 14.602 8.76531C14.602 8.03461 14.3118 7.33384 13.7951 6.81716C13.2784 6.30047 12.5776 6.0102 11.8469 6.0102Z"
            fill="#585858"
          />
        </svg>
        <p>{address}</p>
      </div>
      <div className={styles.card_items}>
        <div className={styles.card_item}>
          <BedIcon />
          <p>{bedroom}</p>
        </div>
        <div className={styles.card_item}>
          <BathroomIcon />
          <p>{bathrooms}</p>
        </div>
        <div className={styles.card_item}>
          <CarIcon />
          <p>
            {parking ? 'with' : 'without'}
            <span>parking</span>
          </p>
        </div>
        <div className={styles.card_item}>
          <SqFeetIcon />
          <p>
            {area}
            <span>ft²</span>
          </p>
        </div>
      </div>
      <div className={styles.card_detail}>
        <span>About this house:</span>
        <div className={styles.description}>
        <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
