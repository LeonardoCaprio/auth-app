import { createContext } from 'react';

export interface User {
  username?: string;
  email: string;
}

export interface IAccountList {
  username: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  userInfo: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
