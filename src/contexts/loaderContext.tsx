import { createContext, useContext, useState } from 'react';

type LoaderContextType = {
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const ctx = useContext(LoaderContext);
  if (!ctx)
    throw new Error('useLoader must be used inside LoaderContextProvider');
  return ctx;
};
