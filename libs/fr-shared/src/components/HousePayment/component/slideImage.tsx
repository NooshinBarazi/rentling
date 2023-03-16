import React from 'react';
import Image from 'next/image';
import Styles from './slideImage.module.scss';
import { SliderPath } from '../../elements/HouseImageSlider/SliderPath';
import { SlidebarButton } from '../../elements/Icons/SliderButton';
import { useState } from 'react';

interface IProps {
  images: any[];
}



export const SlideImage = ({ images }: IProps) => {
  const [currentImageIndex, setCurrentImagIndex] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIndex === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIndex - 1;
    setCurrentImagIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIndex === images.length - 1;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    setCurrentImagIndex(index);
  };

  const ShowImage = () => {
  }
  return (
    <section id={Styles.house_section1}>
      <div className={Styles.house_container}>
        <div className={Styles.slide_left}>
          <button onClick={prevSlide}>
            <SlidebarButton />
          </button>
        </div>
        <div className={Styles.image_container}>
          <div className={Styles.single_Image}>
            <Image src={images[currentImageIndex]} alt="" />
          </div>
          <div className={Styles.small_image_container}>
          {images.map((image,index) => {
              return (
                <div key={index}>
                  <Image src={image} alt="" onClick={()=>setCurrentImagIndex(index)} className={currentImageIndex == index ? 'active' :''} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={Styles.slide_right}>
          <button onClick={nextSlide}>
            <SlidebarButton />
          </button>
        </div>
      </div>
    </section>
  );
};
