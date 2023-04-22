import Image from 'next/image';
import { useState, useEffect } from 'react';
import map from '../HousePayment/component/image/map.jpg';
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
  MapIcon,
  CalenderIcon,
  HouseImageSlider,
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

export const HousePayment = ({
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
    <>
      <section className={styles.container}>
        <div className={styles.house_payment_conatainer}>
          <div className={styles.icon_container}>
            <div className={styles.map_icon}>
              <button
                className={toggleBtnMapIcon ? styles.btn_deactive : styles.btn_active}
                onClick={() => setToggleBtnMapIcon(false)}
              >
                <MapIcon />
              </button>
            </div>
            <div className={styles.calender_icon}>
              <button
                className={toggleBtnMapIcon ? styles.btn_active : styles.btn_deactive}
                onClick={() => setToggleBtnMapIcon(true)}
              >
                <CalenderIcon />
              </button>
            </div>
          </div>
          <div className={styles.side_left}>
            <SlideImage images={images} />
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
                !toggleBtnMapIcon ? styles.side_right_map : styles.deactive_side_right
              }
            >
              <div className={styles.image_map}>
                <Image src={map} alt="/" fill object-fit="cover"/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.house_image_slider}>
          <HouseImageSlider houses={houses} cityName={cityName} />
        </div>
      </section>
    </>
  );
};
