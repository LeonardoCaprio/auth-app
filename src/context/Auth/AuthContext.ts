import { createContext } from 'react';

export interface User {
  username: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  userInfo: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
