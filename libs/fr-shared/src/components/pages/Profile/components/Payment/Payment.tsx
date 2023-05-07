import { Button, Input } from '@rentling/fr-shared';
import styles from './Payment.module.scss';
import { useState } from 'react';

export const Payment = () => {
  const [display, setDisplay] = useState(false);

  const toggle_show = () => {
    setDisplay(!display)
  }

  return (
    <>
      <div className={display? styles.container_show : styles.container}>
        <div className={styles.header_container}>
          <div className={styles.header_favorite_houses}>
            <p>your favorite houses</p>
          </div>
        </div>
        <div className={styles.container_boxs}>
          <div className={styles.container_box_top}>
            <div className={styles.box_top}>
              <div className={styles.description}>
                <p>Your payments</p>
                <span>Keep track of all your payments and refunds.</span>
              </div>
              <div className={display? styles.less_detaile : styles.more_detaile}>
                <button
                  onClick={toggle_show}
                >
                  {display? 'See less details' : 'See more details' } <span></span>
                </button>
              </div>
            </div>
            <div className={display? styles.container_show_detaile : styles.no_show}>
              <div className={styles.description}>
                <p>payments summary :</p>
              </div>
              <div className={styles.total_price}>
                <span> 1,900 $ </span>
                <p>Total spent money for rented houses</p>
              </div>
              <div className={styles.description}>
                <p>payments history :</p>
              </div>
              <div className={styles.price_date_container}>
                <div className={styles.price}>
                  <span>1,110 $ </span>
                </div>
                <div className={styles.input_date}>
                  <input type="date" placeholder="start Date" required />
                </div>
              </div>
              <div className={styles.price_date_container}>
                <div className={styles.price}>
                  <span>800 $ </span>
                </div>
                <div className={styles.input_date}>
                  <input type="date" placeholder="start Date" required />
                </div>
              </div>
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
