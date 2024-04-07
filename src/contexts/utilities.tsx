"use client";

import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

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
  const pathname = usePathname()

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    setToggleMenu(false)
  }, [pathname])

  useEffect(() => {
    const handleMenuDesktop = () => {
      if(window.innerWidth > 768) {
        setToggleMenu(false);
      }
    }

    window.addEventListener("resize", handleMenuDesktop);

    return () => {
      window.removeEventListener("resize", handleMenuDesktop)
    }
  }, [])

  useEffect(() => {
    if(toggleMenu) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  })

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