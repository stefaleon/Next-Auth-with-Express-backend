import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from 'context/AuthContext';
import Layout from 'components/Layout';

export default function ProtectedPage() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [router, user]);

  return <Layout>This is the protected page</Layout>;
}
