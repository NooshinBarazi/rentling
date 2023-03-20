import React from 'react';
import styles from './FormImages.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import car from '../../pages/Landing/images/car.webp';
import ukFlag from '../../pages/Landing/images/flag-uk.webp';
import USFlag from '../../pages/Landing/images/flag-us.webp';
import GERMANYFlag from '../../pages/Landing/images/flag-ge.webp';
import CANADAFlag from '../../pages/Landing/images/flag-ca.webp';
import apartment from '../../pages/Landing/images/apartment.webp';
import house from '../../pages/Landing/images/house.webp';
import land from '../../pages/Landing/images/land.webp';
import oneDay from '../../pages/Landing/images/oneDay.webp';
import thirtyDays from '../../pages/Landing/images/thirtyDays.webp';
import { Canada, Germany, USA, UK } from './CountriesSVG';

interface FormImagesProps {
  selectedRegion: any;
  houseSelected: any;
  apartmentSelected: any;
  dailySelected: any;
  monthlySelected: any;
}

const FormImages = ({
  selectedRegion,
  houseSelected,
  apartmentSelected,
  dailySelected,
  monthlySelected,
}: FormImagesProps) => {
  return (
    <div className={styles.form_country_box}>
      <motion.div className={styles.country}>
        <motion.svg
          animate={
            selectedRegion === 'CANADA' || 'USA'
              ? {
                  x: 100,
                }
              : ''
          }
          width={751}
          height={825}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ d: '' }}
            animate={
              selectedRegion === 'CANADA'
                ? {
                    d: `${Canada}`,
                    opacity: 1,
                  }
                : selectedRegion === 'GERMANY'
                ? { d: `${Germany}`, opacity: 1 }
                : selectedRegion === 'USA'
                ? {
                    d: `${USA}`,
                    opacity: 1,
                  }
                : selectedRegion === 'UK'
                ? {
                    d: `${UK}`,
                    opacity: 1,
                  }
                : {
                    d: ``,
                    opacity: 0,
                  }
            }
            transition={{ duration: 0.2, type: 'tween', ease: 'easeInOut' }}
          />
        </motion.svg>
      </motion.div>

      <div className={styles.form_images_box}>
        <motion.div
          initial={{ opacity: 0, y: 170 }}
          animate={
            selectedRegion === 'CANADA'
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {}
          }
          className={styles.image}
        >
          <Image src={CANADAFlag} alt="CANADAFlag" width={600} height={600} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 170 }}
          animate={
            selectedRegion === 'GERMANY'
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {}
          }
          className={styles.image}
        >
          <Image src={GERMANYFlag} alt="GERMANYFlag" width={600} height={600} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 170 }}
          animate={
            selectedRegion === 'UK'
              ? { y: 0, opacity: 1 }
              : { y: 170, opacity: 0 }
          }
          className={styles.image}
        >
          <Image src={ukFlag} alt="ukFlag" width={600} height={600} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 170 }}
          animate={
            selectedRegion === 'USA'
              ? { y: -10, opacity: 1 }
              : { y: 170, opacity: 0 }
          }
          className={styles.image}
        >
          <Image src={USFlag} alt="USAFlag" width={600} height={600} />
        </motion.div>

        <motion.div
          className={styles.image}
          animate={
            apartmentSelected
              ? { y: 0, scale: 1, opacity: 1 }
              : { y: 100, scale: 0, opacity: 0 }
          }
        >
          <Image src={apartment} alt="apartment" width={600} height={600} />
        </motion.div>

        <motion.div
          className={styles.image}
          animate={
            houseSelected
              ? { y: 0, scale: 1, opacity: 1 }
              : { y: 100, scale: 0, opacity: 0 }
          }
        >
          <Image src={house} alt="house" width={600} height={600} />
        </motion.div>
        <motion.div className={styles.image}>
          <Image src={land} alt="land" width={600} height={600} />
        </motion.div>

        <motion.div className={styles.image}>
          <Image src={car} alt="car" width={600} height={600} />
        </motion.div>
        <motion.div
          className={styles.image}
          animate={
            dailySelected
              ? {
                  transition: { duration: 0.5 },

                  transformOrigin: ' 400px 0px',
                  rotateY: '0deg',
                  x: 40,
                }
              : {
                  transition: { duration: 0.5 },

                  transformOrigin: '400px 0px',
                  rotateY: '-90deg',
                  x: 40,
                }
          }
        >
          <Image src={oneDay} alt="car" width={600} height={600} />
        </motion.div>
        <motion.div
          className={styles.image}
          animate={
            monthlySelected
              ? {
                  transition: { duration: 0.5 },
                  transformOrigin: ' 400px 0px',
                  rotateY: '0deg',
                  x: 40,
                }
              : {
                  transition: { duration: 0.5 },
                  transformOrigin: '400px 0px',
                  rotateY: '-90deg',
                  x: 40,
                }
          }
        >
          <Image src={thirtyDays} alt="car" width={600} height={600} />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(FormImages);
