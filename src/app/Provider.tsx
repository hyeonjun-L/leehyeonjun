'use client';
import React, { ReactNode, useState } from 'react';

export const Context = React.createContext({
  anchorView: false,
  changeAnchorView: () => {},
});

export const AnchorViewProvider = ({ children }: { children: ReactNode }) => {
  const [anchorView, setAnchorView] = useState(false);

  const changeAnchorView = () => {
    setAnchorView(!anchorView);
  };

  return (
    <Context.Provider value={{ anchorView, changeAnchorView }}>
      {children}
    </Context.Provider>
  );
};
