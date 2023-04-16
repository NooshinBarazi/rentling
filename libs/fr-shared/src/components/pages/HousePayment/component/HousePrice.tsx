import { useForm } from 'react-hook-form';
import { Button, CalenderIcon } from '@rentling/fr-shared';
import styles from './housePrice.module.scss';
import { useState } from 'react';

export const HousePrice = () => {
  const { register } = useForm();
  const [handelActive, setHandelActive] = useState(false);

  const handeleClick = () => {
    setHandelActive((handelActive) => !handelActive);
  };

  return (
    <section id={styles.section_house_details}>
      <div className={styles.main_container}>
        <div className={styles.container_text}>
          <p>Rent this house</p>
        </div>
        <div className={styles.button_style}>
          <Button
            Icon={undefined}
            text="Daily"
            onClick={handeleClick}
            newStyle={
              handelActive ? styles.actived_button : styles.deactived_button
            }
          />
          <Button
            Icon={undefined}
            text="Monthly"
            newStyle={
              handelActive ? styles.deactived_button : styles.actived_button
            }
            onClick={handeleClick}
          />
        </div>
        <div className={styles.text_price}>
          <p>{handelActive ? '150' : '3200'}</p>
          <span>{handelActive ? '$/day' : '$/mo'}</span>
        </div>
        <form className={styles.form_container}>
          <div className={styles.input_container}>
            <input type="date" placeholder="start Date" />
          </div>
          <div className={styles.input_container}>
            <input type="date" placeholder="start Date" required />
          </div>
        </form>
        <div className={styles.content_note}>
          <p>
            <span>Notice</span>: you must reserve a house at least for four days
            due to Landlord Tenant Laws
          </p>
        </div>
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
