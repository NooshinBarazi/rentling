import React from 'react';
import { ApartmentIcon } from 'libs/fr-shared/src/components/elements/Icons/ApartmentIcon';
import { BigHouseIcon } from 'libs/fr-shared/src/components/elements/Icons/BigHouseIcon';
import { motion } from 'framer-motion';
import styles from './PropertyType.module.scss';

export const PropertyType = ({
  houseSelected,
  handleCheckboxChange,
  apartmentSelected,
}: any) => {
  return (
    <div className={styles.propertyType}>
      <p>
        Property Type <span> {`(you can choose both)`}</span>{' '}
      </p>

      <motion.label
        onClick={handleCheckboxChange}
        className={
          houseSelected ? styles.house_icon_selected : styles.house_icon
        }
        whileTap={{ scale: 0.9 }}
      >
        <input
          type="checkbox"
          name="house"
          checked={houseSelected}
          onChange={handleCheckboxChange}
          style={{ display: 'none' }}
        />
        <BigHouseIcon onClick={handleCheckboxChange} className={styles.icon} />
        <p>Home</p>
      </motion.label>

      <motion.label
        className={
          apartmentSelected
            ? styles.apartment_icon_selected
            : styles.apartment_icon
        }
        whileTap={{ scale: 0.9 }}
      >
        <input
          type="checkbox"
          name="apartment"
          checked={apartmentSelected}
          onChange={handleCheckboxChange}
          style={{ display: 'none' }}
        />
        <ApartmentIcon onClick={handleCheckboxChange} className={styles.icon} />
        <p>Apartment</p>
      </motion.label>
    </div>
  );
};
