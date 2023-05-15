import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Payments, ProfileTemplate } from '@rentling/fr-shared';

export default function ProfilePayments() {
  const router = useRouter();
  const { id } = router.query;

    return <Payments />;
  
}

ProfilePayments.PageLayout = ProfileTemplate;
