import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { HousePayment, houses } from '@rentling/fr-shared';

export default function MyComponent() {
  const router = useRouter();
  const { id } = router.query;
  const [discription, setDiscription] = useState('');

  return (
    <>
      {houses.map((item, index) => {
        if (item.id == id) {
          return (
            <div>
              <HousePayment
                title={item.title}
                address={item.address}
                rooms={item.feature.bedroom}
                bathrooms={item.feature.bathroom}
                parking={item.feature.parking}
                area={item.feature.city}
                discribtion={item.feature.meterage}
                images={item.images.imagesList}
              />
            </div>
          );
        }
      })}
    </>
  );
}

//   useEffect(()=>{
//     if(!router.isReady) return;
//     console.log(id);
//     houses.map((item)=>{
// if (item.id == id){
//   setDiscription(item.id + ":" + item.title)
//     }})
//   },[router.query.id, router.isReady]);
/* <div key={index}>
<Image
src={image}
alt="/"
onClick={() => setCurrentImagIndex(index)}
className={currentImageIndex == index ? 'active' : ''}
/>
</div> */

/* <div
            className={styles.small_image_container}
            onClick={toggleModalSLider}
          >
            {houses.map((image, index) => {
              return (
                <div key={index}>
                  <Image
                    src={image}
                    alt="/"
                    onClick={() => setCurrentImagIndex(index)}
                    className={currentImageIndex == index ? 'active' : ''}
                  />
                </div>
              );
            })}
          </div> */
