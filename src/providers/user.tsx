import {
  Dispatch,
  useState,
  useContext,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from "react";

interface ContextType {
  currentUser: boolean | null;
  setCurrentUser: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<ContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  return context;
}
