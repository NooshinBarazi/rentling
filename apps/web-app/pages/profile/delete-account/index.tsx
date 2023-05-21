import { DeleteAccount, users, ProfileTemplate } from '@rentling/fr-shared';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function DeleteAccountPage() {
  return <DeleteAccount />;
}

DeleteAccountPage.PageLayout = ProfileTemplate;
