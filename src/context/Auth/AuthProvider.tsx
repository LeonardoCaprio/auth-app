import React, { useEffect } from 'react';
import { AuthContext, User } from './AuthContext';
import { STORAGE_KEY, storageUtils } from '../../utils/storage';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
      const [storedUser, storedIsAuthenticated] = await Promise.all([
        storageUtils.get<User>(STORAGE_KEY.USER_INFO),
        storageUtils.get<string>(STORAGE_KEY.IS_AUTHENTICATED),
      ]);
        if (storedUser && storedIsAuthenticated === 'true') {
          setUserInfo(storedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error loading user:', error);
      }
    };
    loadUser();
  }, []);

  const login = async (username: string, password: string) => {
    setIsAuthenticated(true);
    setUserInfo({ username, password });
    await Promise.all([
      storageUtils.set(STORAGE_KEY.USER_INFO, { username, password }),
      storageUtils.set(STORAGE_KEY.IS_AUTHENTICATED, 'true'),
    ]);
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setUserInfo(null);
    await storageUtils.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
