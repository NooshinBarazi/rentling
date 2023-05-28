import { useRouter } from 'next/router';
import { PersonalInfo, ProfileTemplate } from '@rentling/fr-shared';

export default function PersonalInfoPage() {
  const router = useRouter();
  const { username } = router.query;

  return <PersonalInfo />;
}

PersonalInfoPage.PageLayout = ProfileTemplate;
