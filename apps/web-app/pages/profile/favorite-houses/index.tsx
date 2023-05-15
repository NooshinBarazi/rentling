import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  EmptyPageFavoriteHouses,
  FavoriteHouses,
  users,
  ProfileTemplate,
} from '@rentling/fr-shared';

export default function FindeFavoriteHouses() {
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
    return <EmptyPageFavoriteHouses />;
  }
  return <FavoriteHouses />;
}

FindeFavoriteHouses.PageLayout = ProfileTemplate;
