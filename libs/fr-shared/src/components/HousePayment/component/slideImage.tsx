import React from 'react';
import Image from 'next/image';
import styles from './slideImage.module.scss';
import { SliderPath } from '../../elements/HouseImageSlider/SliderPath';
import house1 from '../image/house1.jpg';
import { SlidebarButton } from '../../elements/Icons/SliderButton';
import { Close } from '../../elements/Icons/Close';
import { Slider } from '../../elements/Icons/Slider';
import { Album } from '../../elements/Icons/Album';
import { useState, useEffect } from 'react';

interface IProps {
  images: any[];
  houses: any[];
}

export const SlideImage = ({ images, houses }: IProps) => {
  const [currentImageIndex, setCurrentImagIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modalSlider, setModalSlider] = useState(false);
  const [modalAlbum, setModalAlbum] = useState(false);
  const [handelActive, setHandelActive] = useState(false);
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  const handeleClick = () => {
    setHandelActive((handelActive) => !handelActive);
  };

  const toggleModalSLider = () => {
    setModalSlider(!modalSlider);
  };

  const toggleModalAlbum = () => {
    setModalAlbum(!modalAlbum);
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
          <div
            className={styles.small_image_container}
            onClick={toggleModalSLider}
          >
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
            <button onClick={toggleModalSLider}>+{images.length}</button>
          </div>
        </div>
      </div>
      {modalSlider && (
        <div
          className={styles.containers}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.container_slider}>
            <div className={styles.Header_container}>
              <div className={styles.Header_left}>
                <button
                  className={styles.close_button}
                  onClick={toggleModalSLider}
                >
                  <Close />
                  <p className={styles.text_btnClose}>close</p>
                </button>
              </div>
              <div className={styles.Header_right}>
                <button
                  onClick={handeleClick}
                  className={
                    handelActive
                      ? styles.deactived_button
                      : styles.actived_button
                  }
                >
                  <Slider />
                  <p className={styles.text_btn}>slider</p>
                </button>
                <button
                  onClick={(event) => {
                    toggleModalSLider();
                    toggleModalAlbum();
                  }}
                  className={
                    handelActive
                      ? styles.actived_button
                      : styles.deactived_button
                  }
                >
                  <Album />
                  <p className={styles.text_btn}>Album</p>
                </button>
              </div>
            </div>
            <div className={styles.box}>
              <SliderPath />
              <button className={styles.slider_button_prev} onClick={prevSlide}>
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
                <div className={styles.current_imageSlider}>
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
              <button className={styles.slider_button_next} onClick={nextSlide}>
                <SlidebarButton />
              </button>
            </div>
          </div>
        </div>
      )}

      {modalAlbum && (
        <div className={styles.container_album}>
          <div className={styles.Header_container}>
            <div className={styles.Header_left}>
              <button
                className={styles.close_button}
                onClick={(event) => {
                  toggleModalSLider();
                  toggleModalAlbum();
                }}
              >
                <Close />
                <p className={styles.text_btnClose}>close</p>
              </button>
            </div>
            <div className={styles.Header_right}>
              <button
                className={
                  handelActive ? styles.actived_button : styles.deactived_button
                }
                onClick={(event) => {
                  toggleModalSLider();
                  toggleModalAlbum();
                }}
              >
                <Slider />
                <p className={styles.text_btn}>slider</p>
              </button>
              <button
                className={
                  handelActive ? styles.deactived_button : styles.actived_button
                }
                onClick={handeleClick}
              >
                <Album />
                <p className={styles.text_btn}>Album</p>
              </button>
            </div>
          </div>
          <div className={styles.current_imageAlbum}>
            {houses.map((img, index) => {
              return (
                <div
                  className={styles.grid_container}
                  onClick={togglePopup}
                  key={index}
                >
                  {img.images.imagesList.map((image: string) => {
                    return (
                      <div className={styles.grid_images}>
                        <img src={image} alt="/" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {popup && (
        <div className={styles.container_popup}>
          <div className={styles.popup}>
            <button className={styles.closePopup} onClick={togglePopup}>
              <Close />
              <p className={styles.text_btnClose}>close</p>
            </button>
            <div className={styles.popupImage}>
              <Image src={house1} alt="/" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
