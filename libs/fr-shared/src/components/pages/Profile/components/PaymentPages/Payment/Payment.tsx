import { Button, SelectInput } from '@rentling/fr-shared';
import styles from './Payment.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import image from './vector/Frame 416.jpg';

export const Payments = (onSubmit: any) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
interface PropsPayment{
  priceDaily:  any;
  priceMonthly: any
}

  const [display, setDisplay] = useState(false);

  const [paymentPopup, setPaymentPopup] = useState(false);

  const toggleShow = () => {
    setDisplay(!display);
  };

  const toggleMethod = () => {
    console.log(paymentPopup);
    setPaymentPopup(!paymentPopup);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <div className={styles.header_favorite_houses}>
            <p>Your Payments Details</p>
          </div>
        </div>
        <div className={styles.container_boxs}>
          <div className={styles.container_box_top}>
            <div className={styles.box_top}>
              <div className={styles.description}>
                <p>Your Payments</p>
                <span>Keep track of all your payments and refunds.</span>
              </div>
              <div
                className={display ? styles.less_detailes : styles.more_detailes}
              >
                <button onClick={toggle_show}>
                  {display ? 'See less details' : 'See more details'}{' '}
                  <span></span>
                </button>
              </div>
            </div>
            <div
              className={
                display ? styles.container_show_detaile : styles.no_show
              }
            >
              <div className={styles.description}>
                <p>Payments Summary :</p>
                <hr className={styles.horizontaـline} />
              </div>
              <div className={styles.total_price}>
                <span> 1,900 $ </span>
                <p>Total spent money for rented houses</p>
              </div>
              <div className={styles.description}>
                <p>Payments History :</p>
                <hr className={styles.horizontaـline} />
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
              <p>Payment Methods</p>
              <span>
                Add a payment method using our secure payment system, then start
                planning your next trip.
              </span>
            </div>
            <div className={styles.btn_payment}>
              <Button
                text="Add Payment Method"
                onClick={toggleMethod}
              />
            </div>
          </div>
        </div>
      </div>
      {paymentPopup && (
        <div className={styles.card_popup}>
          <PaymentMethod
            options={options}
            handelChange={handelChange}
          />
        </div>
      )}
    </>
  );
};
