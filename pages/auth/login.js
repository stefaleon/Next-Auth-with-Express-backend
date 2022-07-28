import { useState, useContext } from 'react';
import Link from 'next/link';
import Layout from 'components/Layout';
import AuthContext from 'context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout title='User Login'>
      <div className='auth'>
        <div className='error'>{error}</div>
        <h1> Log In </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              autoFocus
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input type='submit' value='Login' className='btn' />
        </form>

        <p>
          Not registered? <Link href='/auth/register'>Sign Up</Link>
        </p>
      </div>
    </Layout>
  );
}
