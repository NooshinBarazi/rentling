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
            <div key={index}>
              <HousePayment
                title={item.title}
                address={item.address}
                rooms={item.feature.bedroom}
                bathrooms={item.feature.bathroom}
                parking={item.feature.parking as boolean}
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
