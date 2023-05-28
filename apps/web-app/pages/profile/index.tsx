import { UserProfile } from '@rentling/fr-shared';

function UserProfilePage() {
  return (
    <UserProfile
      firstName={'john'}
      lastName={'Doe'}
      email={'JohnDoe@gmail.com'}
    />
  );
}

export default UserProfilePage;
