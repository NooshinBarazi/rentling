import Image from 'next/image';
import styles from './paymnetMethod.module.scss';
import image from './vector/Frame 416.jpg';
import { Button, SelectInput } from '@rentling/fr-shared';
import { useForm } from 'react-hook-form';

interface IOption {
  value: string;
  label: string;
}

interface PropsPaymentMethod {
  options: IOption[];
}

export const PaymentMethod = (
  onSubmit: any,
  { options }: PropsPaymentMethod
) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
                defaultValue={'Card Number'}
                {...register('exampleRequired', { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className={styles.card_information}>
              <input
                defaultValue={'Expiration'}
                {...register('exampleRequired', { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                defaultValue={'CVV'}
                {...register('exampleRequired', { required: true })}
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
                onClick={() => {}}
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
};
