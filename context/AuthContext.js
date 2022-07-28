import axios from 'axios';
import { createContext, useState } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from 'config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // userData: { name, email, password }
  const register = async (userData) => {
    try {
      const res = await axios.post(`${NEXT_URL}/api/register`, userData);
      setUser(res.data.user);
      router.push('/protected');
    } catch (error) {
      setError(data.message);
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
      setError(data.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
