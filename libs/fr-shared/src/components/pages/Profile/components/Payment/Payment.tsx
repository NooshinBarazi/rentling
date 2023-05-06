import { Button, Input } from '@rentling/fr-shared';
import styles from './Payment.module.scss';
import { useState } from 'react';

export const Payment = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <div className={styles.header_favorite_houses}>
            <p>your favorite houses</p>
          </div>
        </div>
        <div className={styles.container_boxs}>
          <div className={styles.box_top}>
            <div className={styles.description}>
              <p>Your payments</p>
              <span>Keep track of all your payments and refunds.</span>
            </div>
            <div className={styles.btn}>
              <button
                onClick={() => {
                  setDisplay(true);
                }}
              >
                See more details <span></span>
              </button>
            </div>
          </div>
          <div className={styles.box_bottom}>
            <div className={styles.description}>
              <p>Payment methods</p>
              <span>
                Add a payment method using our secure payment system, then start
                planning your next trip.
              </span>
            </div>
            <div className={styles.btn_payment}>
              <Button
                Icon={undefined}
                text="Add Payment Method"
                newStyle={''}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
