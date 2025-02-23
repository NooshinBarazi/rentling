import Image from 'next/image';
import { useState, useEffect } from 'react';
import map from '../image/map.jpg';
import styles from './housePage.module.scss';
import {
  SlideImage,
  HouseDetails,
  HousePrice,
  MapIcon,
  CalenderIcon,
  HouseImageSlider,
  Button,
  ShareIcon,
  LikeIcon,
} from '@rentling/fr-shared';

interface PropsHousePayment {
  title: string;
  address: string;
  bedroom: number;
  bathrooms: number;
  parking: boolean;
  area: string;
  description: string;
  images: any;
  priceDaily: number;
  priceMonthly: number;
  cityName: string;
}

export const HousePage = ({
  title,
  address,
  bathrooms,
  parking,
  area,
  images,
  priceDaily,
  priceMonthly,
  cityName,
  bedroom,
  description,
}: PropsHousePayment) => {
  const [toggleBtnMapIcon, setToggleBtnMapIcon] = useState(true);

  const onclickBtn = () => {
    setToggleBtnMapIcon(!toggleBtnMapIcon);
  };

  return (
    <div className={styles.page_container}>
      <div className={styles.container}>
        <div className={styles.icon_container}>
          <div className={styles.map_icon}>
            <button
              className={
                toggleBtnMapIcon ? styles.btn_deactive : styles.btn_active
              }
              onClick={() => setToggleBtnMapIcon(false)}
            >
              <MapIcon />
            </button>
          </div>
          <div className={styles.calender_icon}>
            <button
              className={
                toggleBtnMapIcon ? styles.btn_active : styles.btn_deactive
              }
              onClick={() => setToggleBtnMapIcon(true)}
            >
              <CalenderIcon />
            </button>
          </div>
        </div>
        <div className={styles.house_page_conatainer}>
          <div className={styles.side_left}>
            <div className={styles.slide_image}>
              <SlideImage images={images} />
            </div>
            <div className={styles.house_detailes}>
              <HouseDetails
                title={title}
                address={address}
                parking={parking}
                bathrooms={bathrooms}
                bedroom={bedroom}
                area={area}
                description={description}
              />
            </div>
          </div>
          <div className={styles.side_right}>
            <div
              className={
                toggleBtnMapIcon
                  ? styles.side_right_calender
                  : styles.deactive_side_right
              }
            >
              <HousePrice priceDaily={priceDaily} priceMonthly={priceMonthly} />
            </div>
            <div
              className={
                !toggleBtnMapIcon
                  ? styles.side_right_map
                  : styles.deactive_side_right
              }
            >
              <div className={styles.image_map}>
                <Image src={map} alt="/" fill object-fit="cover" />
              </div>
              <div className={styles.social_icon}>
                <ShareIcon />
                <LikeIcon />
              </div>
              <div className={styles.button_style_rental}>
                <Button
                  Icon={undefined}
                  text="Rent this house"
                  newStyle=""
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.house_image_slider}>
          {/* <HouseImageSlider houses={houses} cityName={cityName} /> */}
        </div>
      </div>
    </div>
  );
};
