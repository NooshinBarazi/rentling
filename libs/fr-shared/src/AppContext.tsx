import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface AuthContextProps {
  isLoggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = Cookies.get('isLoggedIn');
    if (storedLogin) {
      setLoggedIn(JSON.parse(storedLogin));
    }
  }, []);

  useEffect(() => {
    Cookies.set('isLoggedIn', isLoggedIn.toString());

    const timeoutId = setTimeout(() => {
      setLoggedIn(false);
      Cookies.remove('isLoggedIn');
    }, 6 * 60 * 60 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
