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
import { title } from 'process';
import { set } from 'react-hook-form';

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
  const [selectBtn, setSelectBtn] = useState(true);

  const onclickBtn = () => {
    setSelectBtn(!selectBtn);
  };


  return (
    <>
      <section className={styles.container}>
        <div className={styles.house_payment_conatainer}>
          <div className={styles.icon_container}>
            <div className={styles.map_icon}>
            <button className={selectBtn ? styles.btn_deactive : styles.btn_active} onClick={()=> setSelectBtn(false)}>
              <MapIcon />
            </button>
            </div>
            <div className={styles.Calender_icon}>
            <button className={selectBtn ?  styles.btn_active : styles.btn_deactive} onClick={()=> setSelectBtn(true)}>
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
              selectBtn
                ? styles.side_right_calender
                : styles.deactive_side_right
            }
          >
            <HousePrice priceDaily={priceDaily} priceMonthly={priceMonthly} />
          </div>
          <div
            className={
              !selectBtn ? styles.side_right_map : styles.deactive_side_right
            }
          >
            <Image src={map} alt="/"/>
          </div>
        </div>
        </div>
        <div className={styles.house_image_slider}>
          <HouseImageSlider houses={houses} cityName={cityName}/>
        </div>
      </section>
    </>
  );
};
