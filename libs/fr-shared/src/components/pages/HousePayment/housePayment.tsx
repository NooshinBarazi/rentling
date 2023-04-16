import Image from 'next/image';
import { useState, useEffect } from 'react';
import house1 from '../HousePayment/image/house1.jpg';
import house2 from '../HousePayment/image/house2.jpg';
import house3 from '../HousePayment/image/house3.jpg';
import house4 from '../HousePayment/image/house4.jpg';
import styles from './HousePayment.module.scss';
import {
  houses,
  SlideImage,
  HouseDetails,
  HousePrice,
  Close,
  Album,
  Slider,
  SliderPath,
  SlidebarButton,
} from '@rentling/fr-shared';
import { title } from 'process';

interface PropsHousePayment {
  title: string;
  address: string;
  rooms: number;
  bathrooms: number;
  parking: boolean;
  area: string;
  discribtion: string;
  images: any
}

export const HousePayment = ({
  title,
  address,
  rooms,
  bathrooms,
  parking,
  area,
  discribtion,
  images
}: PropsHousePayment) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.side_left}>
          <SlideImage images={images} />
          <HouseDetails
            title={title}
            address={address}
            parking={parking}
            bathrooms={bathrooms}
            rooms={rooms}
            area={area}
            discribtion={discribtion}
          />
        </div>
        <div className={styles.side_right}>
          <HousePrice />
        </div>
      </section>
    </>
  );
};
