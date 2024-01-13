import { NavLink } from "react-router-dom";
import { SearchUserContainer } from "./styles";
import { useState } from "react";
import { UserProps } from "../../@types/user";
import axios from "axios";

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [userName, setUserName] = useState("");

  async function loadUser(userName: string) {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        const data = response.data;
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <SearchUserContainer>
        <h3>
          {" "}
          Aqui você pode encontrar usuários do Github e explorar seus
          repositóros mais interessantes!
        </h3>
        <div>
          <input
            type="text"
            placeholder="Pesquise um nome de usuário do Github"
            onChange={(e) => setUserName(e.target.value)}
          />
          <NavLink to="/profile">
            <button onClick={() => loadUser(userName)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </NavLink>
        </div>
      </SearchUserContainer>
      <div></div>
    </div>
  );
}
