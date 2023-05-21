import Image from 'next/image';
import styles from './PaymentMethod.module.scss';
import image from '../Payment/vector/Frame 416.jpg';
import { Button, SelectInput } from '@rentling/fr-shared';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const PaymentMethod: any = (onSubmit: any) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [canceHandel, setCanceHandel] = useState(true);

  if (canceHandel) {
    return (
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card_container}>
            <div className={styles.hedear}>
              <div className={styles.image_container}>
                <Image src={image} alt="/" fill object-fit="cover" />
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.card_number_input}>
                <input
                  placeholder="Card Number"
                  type="number"
                  {...register('exampleRequired', { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <div className={styles.card_information}>
                <input
                  placeholder="Expiration"
                  type="number"
                  {...register('Expiration', { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                  placeholder="CVV"
                  type="number"
                  {...register('CVV', { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <div className={styles.select_option}>
                <SelectInput
                  defaultValue={'Country/Region'}
                  name={'Country/Region'}
                  register={register}
                  options={[
                    { value: 'United States', label: 'United States' },
                    { value: 'United States', label: 'United States' },
                    { value: 'United States', label: 'United States' },
                    { value: 'United States', label: 'United States' },
                    { value: 'United States', label: 'United States' },
                  ]}
                />
              </div>
              <div className={styles.button_handel_submit}>
                <Button
                  Icon={undefined}
                  text="CANCEL"
                  newStyle=""
                  onClick={() => {
                    setCanceHandel(false);
                  }}
                />
                <Button
                  Icon={undefined}
                  text="DONE"
                  newStyle=""
                  onClick={() => {}}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
};
