import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from 'config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const PROTECTED_ROUTE_PATHS = ['/protected'];

  const checkUser = async () => {
    try {
      const res = await axios.get(`${NEXT_URL}/api/user`);
      // console.log('in checkUser', res.data.data.user);
      setUser(res.data.data.user);
    } catch (error) {
      console.log(error);
      setUser(null);
      if (PROTECTED_ROUTE_PATHS.includes(router.pathname)) {
        router.push('/auth/login');
      }
    }
  };

  // userData: { name, email, password }
  const register = async (userData) => {
    try {
      const res = await axios.post(`${NEXT_URL}/api/register`, userData);
      setUser(res.data.user);
      router.push('/protected');
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  // userData: { email, password }
  const login = async (userData) => {
    try {
      const res = await axios.post(`${NEXT_URL}/api/login`, userData);
      setUser(res.data.user);
      router.push('/protected');
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setError('Please check your credentials');
      } else {
        setError(error.message);
      }
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${NEXT_URL}/api/logout`);
      router.push('/');
      // setting the timeout to avoid the blink of the Login page before router pushes to root
      setTimeout(() => {
        setUser(null);
      }, 0);
    } catch (error) {
      console.log(error);
      router.push('/error');
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
