// aqui vou começar a criar e exportar contextos para aplicação!
import axios from "axios";
import React, { createContext, useState } from "react";
import { UserProps } from "../@types/user";

//interface UserContextType {}
export const UserContext = createContext({} as any);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [userName, setUserName] = useState("");

  async function loadUser(userName: string) {
    await axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        const data = response.data;
        const { avatar_url, company, name, login, followers, bio } = data;

        const userData: UserProps = {
          avatar_url,
          login,
          followers,
          bio,
          company,
          name,
        };
        setUser(userData);
      })
      .catch((error) => console.log(error));
  }
  return (
    <UserContext.Provider
      value={{ user, setUser, userName, setUserName, loadUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
