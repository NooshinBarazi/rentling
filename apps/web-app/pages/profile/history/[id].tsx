import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ProfileTemplate, RentalHistory, users } from "@rentling/fr-shared";


export default function RentalHistoryPage (){
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState(null);

    const getCurrentuserById = (userId: string) => {
      return users.find((user) => user.profile.id === userId);
    };
    useEffect(() => {
      if (id) {
        const user = getCurrentuserById(id as string);
        setUser(user);
      }
    }, [id]);
  
  
    return (
      <RentalHistory />
    );
}
 
RentalHistoryPage.PageLayout = ProfileTemplate;