import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  CurrentRental,
  EmptyCurrentRental,
  MoreInfo,
  users,
} from '@rentling/fr-shared';
import { ProfileLayout } from '../../layout/ProfileLayout';

export default function CurrentRentalPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const user = getCurrentuserById(id as string);
      setUser(user);
    }
  }, [id]);

  const getCurrentuserById = (userId: string) => {
    return users.find((user) => user.profile.id === userId);
  };

  if (!user) {
    return <EmptyCurrentRental />;
  }
  const moreInfoProps = {
    bedrooms: user.currentHouse.feature.bedroom,
    bathrooms: user.currentHouse.feature.bathroom,
    parking: user.currentHouse.feature.parking,
    area: user.currentHouse.feature.area,
    description: user.currentHouse.description,
    comment: user.currentHouse.comment,
  };
  return (
    <CurrentRental
      title={user.currentHouse.title}
      img={user.currentHouse.images.img}
      region={user.currentHouse.feature.region}
      city={user.currentHouse.feature.city}
      address={user.currentHouse.address}
      price={user.currentHouse.price.thirtyDay}
      duration={user.currentHouse.duration}
      startDate={user.currentHouse.rentalPeriod.startDate}
      endDate={user.currentHouse.rentalPeriod.endDate}
      rental={moreInfoProps}
    />
  );
}

CurrentRentalPage.PageLayout = ProfileLayout;
