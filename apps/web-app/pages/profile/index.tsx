import { UserProfile } from '@rentling/fr-shared';
import { useRouter } from 'next/router';

function UserProfilePage() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <UserProfile
      firstName={'john'}
      lastName={'Doe'}
      email={'JohnDoe@gmail.com'}
    />
  );
}

export default UserProfilePage;