import { useForm } from 'react-hook-form';
import { Button } from '@rentling/fr-shared';
import { Input } from '@rentling/fr-shared';
import styles from './houseDetails.module.scss';
import { CalenderIcon } from '@rentling/fr-shared';

export const HouseDetails = () => {
  const { register } = useForm();
  return (
    <section id={styles.section_houseDetails}>
      <div className={styles.main_container}>
        <div className={styles.container_text}>
          <p>Rent this house</p>
        </div>
        <div className={styles.button_style}>
          <Button
            Icon={undefined}
            text="Daily"
            onClick={() => {}}
            newStyle={styles.actived_button}
          />
          <Button
            Icon={undefined}
            text="Daily"
            newStyle={styles.deactive_button}
            onClick={() => {}}
          />
        </div>
        <div className={styles.text_price}>
          <p>4,100</p>
          <span>$/mo</span>
        </div>
        <form className={styles.form_container}>
          <div className={styles.input_container}>
            <Input
              Icon={undefined}
              type="Date"
              name="startDate"
              register={register}
              required={true}
              id="undefined"
            />
          </div>
          <div className={styles.input_container}>
            <Input
              Icon={undefined}
              type="Date"
              name="EndtDate"
              register={register}
              required={true}
              id="undefined"
            />
          </div>
        </form>
        <div className={styles.button_style}>
          <Button
            Icon={undefined}
            text="RESERVE"
            newStyle=""
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};
