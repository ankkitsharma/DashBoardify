import { createContext, ReactNode, useState } from "react";

export interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const SearchContext = createContext<SearchContextProps | null>(null);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
