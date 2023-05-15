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
      <div className={display ? styles.container_show : styles.container}>
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
                className={display ? styles.less_detaile : styles.more_detaile}
              >
                <button onClick={toggleShow}>
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
          <section className={display ? styles.main_show : styles.main}>
            <div className={styles.payment_container}>
              <div className={styles.card_container}>
                <div className={styles.hedear}>
                  <div className={styles.image_container}>
                    <Image src={image} alt="/" fill object-fit="cover" />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.card_number_input}>
                    <input
                      defaultValue={'Card Number'}
                      {...register('exampleRequired', { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                  </div>
                  <div className={styles.card_information}>
                    <input
                      defaultValue={'Expiration'}
                      {...register('Expiration', { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <input
                      defaultValue={'CVV'}
                      {...register('CVV', { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                  </div>
                  <div className={styles.select_option}>
                    <SelectInput
                      defaultValue={'Country/Region'}
                      name={'Country/Region'}
                      register={register}
                      options={[
                        { value: 'United States', label: 'United States' },
                        { value: 'Sweden', label: 'Sweden' },
                        { value: 'United States', label: 'United States' },
                        { value: 'United States', label: 'United States' },
                        { value: 'United States', label: 'United States' },
                      ]}
                    />
                  </div>
                  <div className={styles.button_handel_submit}>
                    <Button text="CANCEL" newStyle="" onClick={toggleMethod} />
                    <Button text="DONE" newStyle="" onClick={() => {}} />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
