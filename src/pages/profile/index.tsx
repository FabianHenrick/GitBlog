import { IssueSearchContainter, ProfileUserContainer } from "./styles";

import { UserProps } from "../../@types/user";

export function Profile({
  login,
  name,
  avatar_url,
  followers,
  company,
  bio,
}: UserProps) {
  return (
    <div>
      <ProfileUserContainer>
        <img src={avatar_url}></img>
        <div>
          <h1>{login}</h1>
          <span>{bio}</span>
          <div>
            <i className="fa-brands fa-github">
              <span>{name}</span>
            </i>
            <i className="fa-solid fa-building">
              <span>{company}</span>
            </i>
            <i className="fa-solid fa-user-group">
              <span>{followers} seguidores</span>
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
