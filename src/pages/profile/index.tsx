import {
  RepositorysContainer,
  ProfileInformationsContainer,
  RepositoryList,
  ProfileNavegationContainer,
  ProfileUserContainer,
  RepositoryCard,
  RepositorySearchContainter,
} from "./styles";

import axios from "axios";
import { UserContext } from "../../context/UserDataContext";
import { useContext, useState } from "react";
import * as z from "zod";

export function Profile() {
  const { user, userName } = useContext(UserContext);

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

  // utilização do Zod para fazer as buscas
  const searchFormSchema = z.object({ search: z.string() });

  loadRepository(userName);

  return (
    <div>
      <ProfileUserContainer>
        <ProfileNavegationContainer>
          <a href={`/`}>
            <i className="fa-solid fa-chevron-left"></i>
            Voltar
          </a>
          <a href={`https://github.com/${userName}`}>
            Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </ProfileNavegationContainer>

        <img src={user.avatar_url} alt="Profile Image"></img>
        <ProfileInformationsContainer>
          <h1>{user.login}</h1>
          <span>{user.bio}</span>
          <div>
            <i className="fa-brands fa-github">
              <span>{user.name}</span>
            </i>
            <i className="fa-solid fa-building">
              <span>{user.company}</span>
            </i>
            <i className="fa-solid fa-user-group">
              <span>{user.followers} seguidores</span>
            </i>
          </div>
        </ProfileInformationsContainer>
      </ProfileUserContainer>

      <RepositorysContainer>
        <RepositorySearchContainter>
          {" Publicações"}
          <input
            type="text"
            placeholder="Procurando algum repositório expecífico? "
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </RepositorySearchContainter>
        <RepositoryList>
          <li key={repositories.id}>
            {repositories.map((repositories: Repository) => {
              return (
                <RepositoryCard>
                  <div>
                    <h2>{repositories.name}</h2>
                    <time>{repositories.created_at}</time>
                  </div>

                  <p>{repositories.description}</p>
                  <p>{repositories.language}</p>
                </RepositoryCard>
              );
            })}
          </li>
        </RepositoryList>
      </RepositorysContainer>
    </div>
  );
}
