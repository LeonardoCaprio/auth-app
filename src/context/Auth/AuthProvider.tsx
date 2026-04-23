import React from 'react';
import { AuthContext, User } from './AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<User | null>(null);

  const login = (username: string, password: string) => {
    setIsAuthenticated(true);
    setUserInfo({ username, password });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
