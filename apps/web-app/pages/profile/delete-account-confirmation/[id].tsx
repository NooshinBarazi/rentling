import { DeleteAccountConfirmation, users } from '@rentling/fr-shared';
import { ProfileLayout } from '../../layout/ProfileLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function DeleteAccountConfirmationPage() {
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
  return (
    <>
   {user && ( <DeleteAccountConfirmation
    firstName={user.profile.firstName}
    lastName={user.profile.lastName}
  />)}
  </>
  );
}

DeleteAccountConfirmationPage.PageLayout = ProfileLayout;
