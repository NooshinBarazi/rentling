import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/features/authSlice';
import { RootState } from '../store/store';

interface AvailableUser {
  isLoggedIn: boolean | null;
  userEmail: string | null;
  userName: string | null;
  userId: string | null;
}

interface AuthContextProps {
  availableUser: AvailableUser | null;
  setUser: (newUser: AvailableUser | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
  availableUser: null,
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const user = useSelector((state: RootState) => selectUser(state));

  const [availableUser, setAvailableUser] = useState<AvailableUser | null>(
    null
  );

  useEffect(() => {
    const storedAvailableUser = Cookies.get('availableUser');

    const fetchData = () => {
      setTimeout(() => {
        setAvailableUser({
          isLoggedIn: user ? true : null,
          userEmail: user?.email || null,
          userName: user?.username || null,
          userId: user?.id || null,
        });
      }, 500);
    };

    if (storedAvailableUser) {
      setAvailableUser(JSON.parse(storedAvailableUser));
    } else {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    if (availableUser?.isLoggedIn === true) {
      Cookies.set('availableUser', JSON.stringify(availableUser), {
        expires: 1,
      });
    } else {
      Cookies.remove('availableUser');
    }
  }, [availableUser]);

  const setUser = (newUser: AvailableUser | null) => {
    setAvailableUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ availableUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};