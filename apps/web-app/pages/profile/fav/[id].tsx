import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  CurrentRental,
  EmptyCurrentRental,
  FavoriteHouses,
  MoreInfo,
  users,
} from '@rentling/fr-shared';
import { ProfileLayout } from '../../layout/ProfileLayout';

export default function FindeFavoriteHouses() {
  const router = useRouter();
  const { id } = router.query;
  const [house, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const house = getCurrentuserById(id as string);
      setUser(house);
    }
  }, [id]);

  const getCurrentuserById = (houseId: string) => {
    return users.find((house) => house.currentHouse.id === houseId);
  };

  if (!house) {
    return <FavoriteHouses />;
  }
  return (
    <CurrentRental
      title={house.currentHouse.title}
      img={house.currentHouse.images.img}
      region={house.currentHouse.feature.region}
      city={house.currentHouse.feature.city}
      address={house.currentHouse.address}
      price={house.currentHouse.price.thirtyDay}
      duration={house.currentHouse.duration}
      startDate={house.currentHouse.rentalPeriod.startDate}
      endDate={house.currentHouse.rentalPeriod.endDate}
      rental={undefined}
    />
  );
}

FindeFavoriteHouses.PageLayout = ProfileLayout;
