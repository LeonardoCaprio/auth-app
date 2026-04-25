import React, { useEffect } from 'react';
import { AuthContext, IAccountList, User } from './AuthContext';
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

  const login = async (email: string, password: string): Promise<void> => {
    if (!email || !password) {
      throw new Error('Email and password are required.');
    }

    const getStoredAccounts =
      (await storageUtils.get<IAccountList[]>(STORAGE_KEY.ACCOUNT_LIST)) || [];

    const matchedAccount = getStoredAccounts.find(
      (account: IAccountList) =>
        account.email === email && account.password === password,
    );

    if (!matchedAccount) {
      throw new Error('Invalid email or password.');
    }

    const { username: userInfoName, email: userInfoEmail } = matchedAccount;

    await Promise.all([
      storageUtils.set(STORAGE_KEY.USER_INFO, {
        username: userInfoName,
        email: userInfoEmail,
      }),
      storageUtils.set(STORAGE_KEY.IS_AUTHENTICATED, 'true'),
    ]);

    setIsAuthenticated(true);
    setUserInfo({ username: userInfoName, email: userInfoEmail });
  };

  const logout = async (): Promise<void> => {
    try {
      await Promise.all([
        storageUtils.remove(STORAGE_KEY.USER_INFO),
        storageUtils.remove(STORAGE_KEY.IS_AUTHENTICATED),
      ]);
      setIsAuthenticated(false);
      setUserInfo(null);
    } catch {
      throw new Error('Failed to logout. Please try again.');
    }
  };

  const signUp = async (
    username: string,
    email: string,
    password: string,
  ): Promise<void> => {
    if (!username || !email || !password) {
      throw new Error('All fields are required.');
    }

    const getStoredAccounts =
      (await storageUtils.get<IAccountList[]>(STORAGE_KEY.ACCOUNT_LIST)) || [];

    const isEmailExist = getStoredAccounts.some(
      (account: IAccountList) => account.email === email,
    );

    if (isEmailExist) {
      throw new Error('Email already exists. Please use a different email.');
    }

    const newAccount: IAccountList = { username, email, password };
    const updatedAccounts = [...getStoredAccounts, newAccount];
    await storageUtils.set(STORAGE_KEY.ACCOUNT_LIST, updatedAccounts);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userInfo, login, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
