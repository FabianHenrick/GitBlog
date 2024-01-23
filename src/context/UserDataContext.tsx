import React, { createContext, useEffect, useState } from "react";
import { UserProps } from "../@types/user";
import axios from "axios";

//preciso criar uma interface para typagem dos dados e funções exportados com o hook, mas ainda não sei fazer isso.

export const UserContext = createContext({} as any);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [userName, setUserName] = useState("");

  type Repository = {
    name: string;
    language: string;
    description: string | null;
    created_at: string;
  };

  interface RepositoriesType {
    repositorys: Repository[];
  }
  const [repositories, setRepositories] = useState<RepositoriesType[] | any>(
    [] as any
  );
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

  async function loadRepository(userName: string) {
    await axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((response) => {
        const data = response.data;
        const repositories = data;
        const RepositoryData: RepositoriesType = repositories;
        setRepositories(RepositoryData);
      })

      .catch((error) => console.log(error));
  }

  async function fetchRepositories(search?: string) {
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos/${search}`,
      {
        params: {
          q: search,
        },
      }
    );

    setRepositories(response.data);
    console.log(repositories);
  }

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userName,
        setUserName,
        loadUser,
        repositories,
        loadRepository,
        fetchRepositories,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
