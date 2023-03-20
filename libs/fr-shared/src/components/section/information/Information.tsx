import {
  CellphoneIcon,
  CameraIcon,
  HouseTickIcon,
  InsuranceIcon,
} from '@rentling/fr-shared';
import styles from './Information.module.scss';

export const Information = () => {
  return (
    <section className={styles.info}>
      <div className={styles.header}>
        <h4>How can we help you?</h4>
      </div>
      <div className={styles.info_items}>
        <div className={styles.info_item}>
          <CellphoneIcon />
          <p>
            An easy online renting experience for you to spend time on what
            really is important
          </p>
        </div>
        <div className={styles.info_item}>
          <InsuranceIcon />
          <p>We put all our hearts in solving problems for you not to worry</p>
        </div>
        <div className={styles.info_item}>
          <CameraIcon />
          <p>
            Honest photographs, videos and descriptions for you to make safe
            decisions
          </p>
        </div>
        <div className={styles.info_item}>
          <HouseTickIcon />
          <p>We verify the properties, you spot them online</p>
        </div>
      </div>
    </section>
  );
};
