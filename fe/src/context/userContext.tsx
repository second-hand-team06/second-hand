import { createContext, useContext, useState } from 'react';

import { getUserInfo } from '@utils/index';

interface Region {
  id: number;
  name: string;
}

interface User {
  id: number;
  github: number;
  loginId: string;
  profileUrl: string;
  regions: Region[];
}

interface UserContextValue {
  user: User | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  setRegions: (regions: Region[]) => void;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  setRegions: () => {},
});

const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('useUserContext should be used within UserContext.Provider');
  }

  return user;
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string) => {
    localStorage.setItem('Token', token);
    setUser({ ...getUserInfo(token) });
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('Token');
    setUser(null);
    setIsLoggedIn(false);
  };

  const setRegions = (regions: Region[]) => {
    setUser((previous) => previous && { ...previous, regions: regions });
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout, setRegions }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserProvider };
