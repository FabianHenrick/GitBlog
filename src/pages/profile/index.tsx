import { IssueSearchContainter, ProfileUserContainer } from "./styles";
import { UserContext } from "../../context/UserDataContext";
import { useContext } from "react";

export function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <ProfileUserContainer>
        <img src={user.avatar_url}></img>
        <div>
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
        </div>
      </ProfileUserContainer>
      <IssueSearchContainter>
        {" Publicações"}
        <input
          type="text"
          placeholder="Pesquise um nome de usuário do Github"
        />
      </IssueSearchContainter>
    </div>
  );
}
