import React, { useState, useEffect } from 'react';
import styles from './HouseImageSlider.module.scss';
import Image from 'next/image';
import { SliderPath } from './SliderPath';
import { SlidebarButton, LabelTagIcon, HouseCard } from '@rentling/fr-shared';

interface HouseImageSliderProps {
  houses: any[];
  cityName: string;
}

export const HouseImageSlider = ({
  houses,
  cityName,
}: HouseImageSliderProps) => {
  const [currentImageIndex, setCurrentImagIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIndex === 0;
    const index = resetToVeryBack ? houses.length - 1 : currentImageIndex - 1;
    setCurrentImagIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIndex === houses.length - 1;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    setCurrentImagIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(intervalId);
    }
  }, [isHovered, nextSlide]);

  const currentImage = houses[currentImageIndex];

  const prevImage =
    currentImageIndex === 0
      ? houses[houses.length - 1]
      : houses[currentImageIndex - 1];

  const nextImage =
    currentImageIndex === houses.length - 1
      ? houses[0]
      : houses[currentImageIndex + 1];

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.label_tag}>
        {/**
         * depends on our json object's structure, we need to set cityName to
        {currentImage.city}
         */}
        <LabelTagIcon cityName={cityName} />
      </div>
      <div className={styles.box}>
        <SliderPath />
        <button className={styles.slider_button_prev} onClick={prevSlide}>
          <SlidebarButton />
        </button>
        <div className={styles.slider}>
          <div className={styles.prev_image}>
            <Image
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              src={prevImage.images.img}
              alt=""
              fill
              object-fit="cover"
            />
          </div>
          <div className={styles.current_image}>
            <Image
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              src={currentImage.images.img}
              alt=""
              fill
              object-fit="cover"
            />
          </div>
          <div className={styles.next_image}>
            <Image
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              src={nextImage.images.img}
              alt=""
              fill
              object-fit="cover"
            />
          </div>
        </div>
        <button className={styles.slider_button_next} onClick={nextSlide}>
          <SlidebarButton />
        </button>
      </div>
      <div style={{ marginTop: '-12rem' }}>
        <HouseCard
          id={currentImage.id}
          address={currentImage.address}
          bathrooms={currentImage.feature.bathroom}
          bedrooms={currentImage.feature.bedroom}
          parking={currentImage.feature.parking}
          area={currentImage.feature.meterage}
          thirtyDay={currentImage.price.thirtyDay}
          oneDay={currentImage.price.oneDay}
        />
      </div>
    </div>
  );
};
