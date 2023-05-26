import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/features/authSlice';
import { RootState } from '../store/store';

interface AuthContextProps {
  isLoggedIn: boolean;
  userEmail: string | null;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  userEmail: null,
  setIsLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const user = useSelector((state: RootState) => selectUser(state));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = Cookies.get('userEmail');
    const storedLogin = Cookies.get('isLoggedIn');

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsLoggedIn(Boolean(user));
      setUserEmail(user?.email || null);
    };

    if (storedEmail) {
      setUserEmail(JSON.parse(storedEmail));
    } else {
      fetchData();
    }

    if (storedLogin) {
      setIsLoggedIn(JSON.parse(storedLogin));
    } else {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    if (userEmail) {
      Cookies.set('userEmail', JSON.stringify(userEmail), { expires: 1 });
    } else {
      Cookies.remove('userEmail');
    }
  }, [userEmail]);

  useEffect(() => {
    if (isLoggedIn) {
      Cookies.set('isLoggedIn', JSON.stringify(isLoggedIn), { expires: 1 });
    } else {
      Cookies.remove('isLoggedIn');
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};