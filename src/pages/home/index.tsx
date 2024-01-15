import { NavLink } from "react-router-dom";
import { SearchUserContainer } from "./styles";

import { UserContext } from "../../context/UserDataContext";

import { useContext } from "react";

export function Home() {
  const { userName, setUserName, loadUser } = useContext(UserContext);

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
