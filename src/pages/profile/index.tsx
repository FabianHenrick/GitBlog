import {
  RepositorysContainer,
  ProfileInformationsContainer,
  RepositoryList,
  ProfileNavegationContainer,
  ProfileUserContainer,
  RepositoryCard,
  RepositorySearchContainter,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserContext } from "../../context/UserDataContext";
import { useContext } from "react";
import * as z from "zod";

const searchFormSchema = z.object({ search: z.string() });
type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function Profile() {
  type Repository = {
    name: string;
    language: string;
    description: string | null;
    created_at: string;
  };
  const { user, userName, repositories, fetchRepositories } =
    useContext(UserContext);

  // utilização do Zod para fazer as buscas
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchRepositories(data: SearchFormInputs) {
    await fetchRepositories(data.search);
  }

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
        <RepositorySearchContainter
          onSubmit={handleSubmit(handleSearchRepositories)}
        >
          {" Publicações"}
          <input
            type="text"
            placeholder="Procurando algum repositório expecífico? "
            {...register("search")}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </RepositorySearchContainter>
        <RepositoryList>
          <li key={repositories.name}>
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
