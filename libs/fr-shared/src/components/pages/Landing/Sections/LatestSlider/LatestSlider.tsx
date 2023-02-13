import { HouseImageSlider } from '@rentling/fr-shared';
import { Seattle } from '../../svgs/Seattle';
import styles from './LatestSlider.module.scss';

// test object for testing
// const Images = [
//   {
//     url: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
//     address: 'Lorem Ipsum LoremLo remLorem Lorv e  mLor emLo remL orem',
//     detail: 'Image 1 detail',
//     name: 'Image 1',
//     rooms: '3',
//     bathrooms: '2',
//     parking: false,
//     area: '950',
//   },

//   {
//     url: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
//     address: 'Lorem Ipsum   em Lo re mL orem  Lor  emLor em',
//     detail: 'Image 1 detail',
//     name: 'Image 1',
//     rooms: '3',
//     bathrooms: '2',
//     parking: false,
//     area: '950',
//   },
//   {
//     url: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY',
//     address: 'Lorem Ipsum LoremL or emLorem Lorem Lorem LoremLorem',
//     detail: 'Image 2 detail',
//     name: 'Image 2',
//     rooms: '3',
//     bathrooms: '2',
//     parking: true,
//     area: '950',
//   },

//   {
//     url: 'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
//     address: 'Lorem Ipsum LoremL oremLorem Lore mLor emLoremL orem',
//     detail: 'Image 3 detail',
//     name: 'Image 3',
//     rooms: '3',
//     bathrooms: '2',
//     parking: false,
//     area: '950',
//   },
//   {
//     url: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY',
//     address: 'Lorem Ipsum LoremLoremLor em Lorem Lor emLo remL orem',
//     detail: 'Image 2 detail',
//     name: 'Image 2',
//     rooms: '3',
//     bathrooms: '2',
//     parking: true,
//     area: '950',
//   },
//   {
//     url: 'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
//     address: 'Lorem Ipsum LoremL oremLorem Lore mLoremL oremLorem',
//     detail: 'Image 3 detail',
//     name: 'Image 3',
//     rooms: '3',
//     bathrooms: '2',
//     parking: true,
//     area: '950',
//   },
// ];

export const LatestSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.skyline}>
        <Seattle />
      </div>
      <HouseImageSlider images={Images} />
    </div>
  );
};
