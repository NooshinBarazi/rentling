import {
  DeleteAccountConfirmation,
  ProfileTemplate,
  useAuth,
} from '@rentling/fr-shared';

export default function DeleteAccountConfirmationPage() {
  const { availableUser } = useAuth();

  return (
    <>
      <DeleteAccountConfirmation
        firstName={availableUser.userName}
        lastName={availableUser.userEmail}
      />
    </>
  );
}

DeleteAccountConfirmationPage.PageLayout = ProfileTemplate;
