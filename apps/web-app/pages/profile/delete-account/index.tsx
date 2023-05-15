import { DeleteAccount, users, ProfileTemplate } from '@rentling/fr-shared';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function DeleteAccountPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  return <DeleteAccount />;
}

DeleteAccountPage.PageLayout = ProfileTemplate;
