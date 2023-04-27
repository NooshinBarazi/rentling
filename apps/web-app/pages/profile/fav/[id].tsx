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

}

FindeFavoriteHouses.PageLayout = ProfileLayout;
