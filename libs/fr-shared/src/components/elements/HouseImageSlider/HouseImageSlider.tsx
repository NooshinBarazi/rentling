import React, { useState, useEffect } from 'react';
import styles from './HouseImageSlider.module.scss';
import Image from 'next/image';
import { SliderPath } from './SliderPath';
import { SlidebarButton, EtiketIcon, SliderCard } from '@rentling/fr-shared';

interface HouseImageSliderProps {
  images: any[];
}

export const HouseImageSlider = ({ images }: HouseImageSliderProps) => {
  const [currentImageIndex, setCurrentImagIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    let intervalId: any;
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(intervalId);
  }, [isHovered, nextSlide]);

  const currentImage = images[currentImageIndex];

  const prevImage =
    currentImageIndex === 0
      ? images[images.length - 1]
      : images[currentImageIndex - 1];

  const nextImage =
    currentImageIndex === images.length - 1
      ? images[0]
      : images[currentImageIndex + 1];

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.etiket}>
        {/**
         * depends on our json object's structure, we need to set cityName to
        {currentImage.city}
         */}
        <EtiketIcon cityName="chicago" />
      </div>
      <div className={styles.box}>
        <SliderPath />
        <button className={styles.slider_Button_Prev} onClick={prevSlide}>
          <SlidebarButton />
        </button>
        <div className={styles.Slider}>
          <div className={styles.PrevImage}>
            <Image src={prevImage.url} alt="" fill object-fit="cover" />
          </div>
          <div className={styles.CurrentImage}>
            <Image src={currentImage.url} alt="" fill />
          </div>
          <div className={styles.NextImage}>
            <Image src={nextImage.url} alt="" fill object-fit="contain" />
          </div>
        </div>
        <button className={styles.slider_Button_Next} onClick={nextSlide}>
          <SlidebarButton />
        </button>
      </div>
      <SliderCard
        address={currentImage.address}
        bathrooms={currentImage.bathrooms}
        rooms={currentImage.rooms}
        parking={currentImage.parking}
        sqfeet={currentImage.sqfeet}
        url={currentImage.url}
      />
    </div>
  );
};
