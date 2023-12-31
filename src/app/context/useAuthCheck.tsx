'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthInterface } from '@/util/types';

interface AuthContextProps {
  currentUser: AuthInterface;
  setAuthUser: (user: AuthInterface) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthCheck = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthCheck must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthInterface>({
    userId: undefined,
    authToken: undefined,
  });

  const setAuthUser = (user: AuthInterface) => {
    setCurrentUser(user);
  };

  const contextValue: AuthContextProps = {
    currentUser,
    setAuthUser,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
