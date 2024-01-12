import { NavLink } from "react-router-dom";
import { SearchUserContainer } from "./styles";

export function Home() {
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
          />
          <NavLink to="/profile">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </NavLink>
        </div>
      </SearchUserContainer>
      <div></div>
    </div>
  );
}
