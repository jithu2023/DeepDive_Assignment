'use client';  

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/landing-page');
    } else {
      router.push('/personal-page');
    }
  }, [session, router]);

  return (
    <div>
      {session ? (
        <h1>Welcome {session.user?.name}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default HomePage;
