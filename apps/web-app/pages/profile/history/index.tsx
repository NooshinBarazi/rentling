import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ProfileTemplate, RentalHistory, users } from '@rentling/fr-shared';

export default function RentalHistoryPage() {
  return <RentalHistory />;
}

RentalHistoryPage.PageLayout = ProfileTemplate;
