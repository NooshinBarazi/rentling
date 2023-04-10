import React from 'react';
import Image from 'next/image';
import styles from './slideImage.module.scss';
import { SliderPath } from '../../elements/HouseImageSlider/SliderPath';
import { SlidebarButton } from '../../elements/Icons/SliderButton';
import { Close} from '../../elements/Icons/Close';
import { Slider } from '../../elements/Icons/Slider';
import { Album } from '../../elements/Icons/Album';
import { useState,useEffect } from 'react';

interface IProps {
  images: any[];
  houses:any[];
}

export const SlideImage = ({ images,houses }: IProps) => {
  const [currentImageIndex, setCurrentImagIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState(false);
  const [handelActive, setHandelActive] = useState(false);

  const handeleClick = () => {
    setHandelActive((handelActive) => !handelActive);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

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


  const ShowImage = () => {};
  return (
    <section id={styles.house_section1}>
      <div className={styles.house_container}>
        <div className={styles.image_container}>
          <div className={styles.single_Image}>
            <Image src={images[currentImageIndex]} alt="" />
          </div>
          <div className={styles.small_image_container} onClick={toggleModal}>
            {images.map((image, index) => {
              return (
                <div key={index}>
                  <Image
                    src={image}
                    alt="/"
                    onClick={() => setCurrentImagIndex(index)}
                    className={currentImageIndex == index ? 'active' : ''}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.counter_container}>
          <div className={styles.text_coounter}>
            <button onClick={toggleModal}>+{images.length}</button>
          </div>
        </div>
      </div>
      {modal && (
          <div
            className={styles.containers}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={styles.conatiner}>
              <div className={styles.Header_container}>
                <div className={styles.Header_left}>
                  <button className={styles.close_button} onClick={toggleModal}>
                    <Close />
                  </button>
                </div>
                <div className={styles.Header_right}>
                  <button onClick={handeleClick} className={handelActive ? styles.deactived_button  : styles.actived_button}>
                    <Slider />
                    <p className={styles.text_btn}>slider</p>
                  </button>
                  <button onClick={handeleClick} className={handelActive ? styles.actived_button : styles.deactived_button} >
                    <Album/>
                    <p className={styles.text_btn}>Album</p>
                  </button>
                </div>
              </div>
              <div className={styles.box}>
                <SliderPath />
                <button
                  className={styles.slider_button_prev}
                  onClick={prevSlide}
                >
                  <SlidebarButton />
                </button>
                <div className={styles.slider}>
                  <div className={styles.prev_image}>
                    <Image
                      src={prevImage.images.img}
                      alt=""
                      fill
                      object-fit="cover"
                    />
                  </div>
                  <div className={styles.current_image}>
                    <Image
                      src={currentImage.images.img}
                      alt=""
                      fill
                      object-fit="cover"
                    />
                  </div>
                  <div className={styles.next_image}>
                    <Image
                      src={nextImage.images.img}
                      alt=""
                      fill
                      object-fit="cover"
                    />
                  </div>
                </div>
                <button
                  className={styles.slider_button_next}
                  onClick={nextSlide}
                >
                  <SlidebarButton />
                </button>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};
