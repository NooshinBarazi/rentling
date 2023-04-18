import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { HousePayment, houses } from '@rentling/fr-shared';

export default function MyComponent() {
  const router = useRouter();
  const { id } = router.query;
  const [house, setHouse] = useState(null);

  useEffect(() => {
    if (id) {
      const houseData = getHouseById(id as string);
      setHouse(houseData);
    }
  }, [id]);

  const getHouseById = (houseId: string) => {
    return houses.find((house) => house.id === houseId);
  };

  if (!house) {
   return <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}><h1>House profile not found!</h1>;</div>
  } else {
    return (
      <div>
        <HousePayment
          title={house.title}
          address={house.address}
          bathrooms={house.feature.bathroom}
          parking={house.feature.parking as boolean}
          area={house.feature.city}
          description={undefined}
          images={house.images.imagesList}
          priceDaily={house.price.oneDay}
          priceMonthly={house.price.thirtyDay}
          cityName={house.feature.city}
          bedroom={house.bedroom}
        />
      </div>
    );
  }
}
