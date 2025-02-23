import { useForm } from 'react-hook-form';
import { Button, CalenderIcon } from '@rentling/fr-shared';
import styles from './housePrice.module.scss';
import { useState } from 'react';

interface PropsHousePrice {
  priceDaily: number;
  priceMonthly: number;
}
export const HousePrice = ({ priceDaily, priceMonthly }: PropsHousePrice) => {
  const [handelActive, setHandelActive] = useState(false);

  const handeleClick = () => {
    setHandelActive((handelActive) => !handelActive);
  };

  return (
    <section className={styles.section_house_details}>
      <div className={styles.main_container}>
        <div className={styles.container_text}>
          <p>Rent this house</p>
        </div>
        <div className={styles.button_style}>
          <div className={styles.button_left}>
            <Button
              Icon={undefined}
              text="Daily"
              onClick={() => setHandelActive(true)}
              newStyle={
                handelActive ? styles.actived_button : styles.deactived_button
              }
            />
          </div>
          <div className={styles.button_right}>
            <Button
              Icon={undefined}
              text="Monthly"
              newStyle={
                handelActive ? styles.deactived_button : styles.actived_button
              }
              onClick={() => setHandelActive(false)}
            />
          </div>
        </div>
        <div className={styles.text_price}>
          <p>{handelActive ? priceDaily : priceMonthly}</p>
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
        <div className={styles.button_style_reserve}>
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
