import { NavLink } from "react-router-dom";
import { SearchUserContainer } from "./styles";
import { useState } from "react";
import { UserProps } from "../../@types/user";
import axios from "axios";

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [userName, setUserName] = useState("");

  async function loadUser(userName: string) {
    await axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        const data = response.data;
        const { avatar_url, company, name, login, location, followers, bio } =
          data;

        const userData: UserProps = {
          avatar_url,
          login,
          location,
          followers,
          bio,
          company,
          name,
        };
        setUser(userData);
        console.log(userData);
      })
      .catch((error) => console.log(error));
  }

  /*  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  }; */
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
            //onKeyDown={handleKeyDown}
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
