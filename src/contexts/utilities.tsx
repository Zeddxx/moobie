"use client";

import { createContext, useState } from "react";

type INITIAL_STATE_TYPES = {
  isToggled: boolean;
  handleToggleMenu: () => void;
};

const INITIAL_STATE: INITIAL_STATE_TYPES = {
  isToggled: false,
  handleToggleMenu: () => {},
};

export const Context = createContext<INITIAL_STATE_TYPES>(INITIAL_STATE);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Context.Provider
      value={{
        handleToggleMenu,
        isToggled: toggleMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};