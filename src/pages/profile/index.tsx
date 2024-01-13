import { IssueSearchContainter, ProfileUserContainer } from "./styles";
/* import { useState } from "react";
import { UserProps } from "../../@types/user";
import axios from "axios";
import Url from "../../axios/config"; */

export function Profile() {
  /* const [user, setUser] = useState<UserProps | null>();
  function getUser() {
    axios
      .get("https://api.github.com/users/fabianhenrick")
      .then((response) => {
        const data = response.data;
        .textContent = data;
      })
      .catch((error) => console.log(error));
  } */
  return (
    <div>
      <ProfileUserContainer>
        <img src="https://avatars.githubusercontent.com/u/106247220?v=4"></img>
        <div>
          <h1>Fabian Henrick</h1>
          <span>
            Futuro programador, e streamer, tentando programar uma vida melhor
            para minha família!
          </span>
          <div>
            <i className="fa-brands fa-github">
              <span>Fabian Henrick</span>
            </i>
            <i className="fa-solid fa-building">
              <span>Rocketseat</span>
            </i>
            <i className="fa-solid fa-user-group">
              <span>2 seguidores</span>
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
