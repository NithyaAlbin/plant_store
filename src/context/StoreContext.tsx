"use client";

import { createContext, useContext, useState } from "react";

type StoreContextType = {
  quantity: number;
  setQuantity: (value: number) => void;
};

const StoreContext = createContext<StoreContextType>({
  quantity: 1,
  setQuantity: () => {},
});

export function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <StoreContext.Provider
      value={{
        quantity,
        setQuantity,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}