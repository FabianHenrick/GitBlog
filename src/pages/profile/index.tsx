import {
  RepositorysContainer,
  IssueSearchContainter,
  ProfileInformationsContainer,
  RepositoryList,
  ProfileNavegationContainer,
  ProfileUserContainer,
} from "./styles";
import axios from "axios";
import { UserContext } from "../../context/UserDataContext";
import { useContext } from "react";
import { RepositoryComponent } from "../../components/RepositorysComponent";

export function Profile() {
  const { user, userName } = useContext(UserContext);

  interface RepositoryType {
    name: string;
    language: string;
    description: string | null;
    created_at: string;
  }

  interface RepositorysType {
    repositorys: RepositoryType[];
  }
  const [repositorys, setRepositorys] = useContext<RepositorysType[]>(
    [] as any
  );

  async function loadRepository(setRepositorys) {
    await axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const data = response.data;
        const [Repository] = data;

        setRepositorys(Repository);
      })

      .catch((error) => console.log(error));
  }
  console.log(user);
  loadRepository(repositorys);
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

        <img src={user.avatar_url}></img>
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
        <IssueSearchContainter>
          {" Publicações"}
          <input
            type="text"
            placeholder="Procurando algum repositório expecífico? "
          />
        </IssueSearchContainter>
        <RepositoryList>
          <li>
            <RepositoryComponent />
          </li>
        </RepositoryList>
      </RepositorysContainer>
    </div>
  );
}
