import Image from 'next/image';
import house2 from './image/house2.jpg';
import house3 from './image/house3.jpg';
import house4 from './image/house4.jpg';
import Styles from './housePayment.module.scss';
import { SlidebarButton } from '@rentling/fr-shared';

export const HousePayment = () => {
  return (
    <section id={Styles.house_section1}>
      <div className={Styles.house_container}>
        <Image className={Styles.singleHouseImage} src="" alt="" />
        <div className={Styles.small_image_container}>
          <div>
            <Image className={Styles.small_image} src={house2} alt="" />
            <div className={Styles.slide_left}>
              <SlidebarButton />
            </div>
          </div>
          <div>
            <Image className={Styles.small_image} src={house3} alt="" />
          </div>
          <div>
            <Image className={Styles.small_image} src={house4} alt="" />
            <div>
              <SlidebarButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
