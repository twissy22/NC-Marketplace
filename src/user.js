import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Paul-C",
    avatar_url:
      "https://images.prismic.io/northcoders/bbbb23b9-a160-4726-8dec-57b17d6de8da_Paul+Copley.jpg",
    kudos: 0,
  });
  const logout = ()=> {
setUser({})
  }
  return (
    <UserContext.Provider value={{ user, setUser, logout}}>
      {children}
    </UserContext.Provider>
  );
};
