import Image from 'next/image';
import house2 from './image/house2.jpg';
import house3 from './image/house3.jpg';
import house4 from './image/house4.jpg';
import Style from './housePayment.module.scss';

export const HousePayment = () => {
  return (
    <section id={Style.house_section1}>
      <div className={Style.house_container}>
        <Image className={Style.singleHouseImage} src="" alt="" />
        <div className={Style.small_image_container}>
          <div>
            <Image className={Style.small_image} src={house2} alt="" />
          </div>
          <div>
            <Image className={Style.small_image} src={house3} alt="" />
          </div>
          <div>
            <Image className={Style.small_image} src={house4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
