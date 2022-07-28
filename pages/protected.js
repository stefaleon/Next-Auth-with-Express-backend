import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
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

  if (!user) return null;
  return (
    <Layout>
      <p>This is the protected page</p>
      <button
        id='check-cookie-btn'
        onClick={async () => {
          const checkResponse = await axios.get('/api/checkCookie');
          console.log('The cookie is:', checkResponse.data.cookie);
          document.getElementById('cookie-div').textContent =
            checkResponse.data.cookie;
        }}
      >
        Check Cookie
      </button>
      <div id='cookie-div' className='cookie-div'></div>
    </Layout>
  );
}
