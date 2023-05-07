import Image from 'next/image';
import styles from './paymnetMethod.module.scss';
import image1 from './vector/Vector1.jpg';
import image2 from './vector/Vector2.jpg';
import image3 from './vector/Vector3.jpg';
import image4 from './vector/Vector4.jpg';

export const PaymentMethod = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card_container}>
          <div className={styles.hedear}>
            <div  className={styles.image1}>
              <Image src={image1} alt="/" fill object-fit="cover" />
            </div>
            <div className={styles.image2}>
              <Image src={image2} alt="/" fill object-fit="cover" />
            </div>
            <div className={styles.image3}>
              <Image src={image3} alt="/" fill object-fit="cover" />
            </div>
            <div className={styles.image4}>
              <Image src={image4} alt="/" fill object-fit="cover" />
            </div>
          </div>
          <form></form>
        </div>
      </div>
    </section>
  );
};
