import { createContext, useReducer } from "react";

export const ProviderContext = createContext();

export default function Provider({ children, store }) {
  const [state, dispatch] = useReducer(...store);
  const contextValue = {
    state,
    dispatch,
  };

  return (
    <ProviderContext.Provider value={contextValue}>
      {children}
    </ProviderContext.Provider>
  );
}
