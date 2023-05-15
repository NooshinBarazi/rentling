import { useState } from 'react';
import styles from './RoomsBathrooms.module.scss';
import { motion } from 'framer-motion';
import { BedIcon } from 'libs/fr-shared/src/components/elements/Icons/BedIcon';
import { BathroomIcon } from 'libs/fr-shared/src/components/elements/Icons/BathroomIcon';

export const Rooms = ({ bedCount, handleBedChange }: any) => {
  const [countIsOpen, setCountIsOpen] = useState(false);

  return (
    <div className={styles.rooms}>
      <div className={styles.icon}>
        <BedIcon />
        <p>Bedrooms</p>
      </div>
      <div className={styles.count_buttons}>
        {['all', '1', '2', '3'].map((count) => (
          <motion.li
            whileTap={{ scale: 0.9 }}
            key={count}
            onClick={() => handleBedChange(count)}
            className={count === bedCount ? styles.active : ''}
          >
            <p>{count}</p>
          </motion.li>
        ))}
      </div>

      <div
        style={{ zIndex: 33 }}
        tabIndex={3}
        onBlur={() => setCountIsOpen(false)}
        className={
          ['all', '1', '2', '3'].includes(bedCount)
            ? styles.dropdown
            : styles.dropdown_active
        }
        onClick={() => setCountIsOpen(!countIsOpen)}
      >
        <p>{['all', '1', '2', '3'].includes(bedCount) ? '+4' : bedCount}</p>
        <motion.ul
          animate={
            countIsOpen
              ? {
                  height: '',
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                  },
                }
              : {
                  opacity: 0,
                  height: 0,
                  transition: {
                    duration: 0.1,
                  },
                }
          }
          className={styles.dropdown_list}
        >
          {['4', '5', '6', '7', '8'].map((count: any) => (
            <li key={count} onClick={() => handleBedChange(count)}>
              {count}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export const Bathrooms = ({ bathroomCount, handleBathChange }: any) => {
  const [countIsOpen, setCountIsOpen] = useState(false);
  //
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.rooms}>
      <div className={styles.icon}>
        <BathroomIcon />
        <p>Bathrooms</p>
      </div>
      <div className={styles.count_buttons}>
        {['all', '1', '2', '3'].map((count) => (
          <motion.li
            whileTap={{ scale: 0.9 }}
            key={count}
            onClick={() => handleBathChange(count)}
            className={count === bathroomCount ? styles.active : ''}
          >
            <p>{count}</p>
          </motion.li>
        ))}
      </div>

      <div
        tabIndex={2}
        onBlur={() => setCountIsOpen(false)}
        className={
          ['all', '1', '2', '3'].includes(bathroomCount)
            ? styles.dropdown
            : styles.dropdown_active
        }
        onClick={() => setCountIsOpen(!countIsOpen)}
      >
        <p>
          {['all', '1', '2', '3'].includes(bathroomCount)
            ? '+4'
            : bathroomCount}
        </p>

        <motion.ul
          animate={
            countIsOpen
              ? {
                  height: '',
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                  },
                }
              : {
                  opacity: 0,
                  height: 0,
                  transition: {
                    duration: 0.1,
                  },
                }
          }
          className={styles.dropdown_list}
        >
          {['4', '5', '6', '7', '8'].map((count: any) => (
            <li
              key={count}
              className={styles.option}
              onClick={() => handleBathChange(count)}
            >
              {count}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
