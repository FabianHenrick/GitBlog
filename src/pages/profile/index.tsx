import { ProfileUserContainer } from "./styles";
export function Profile() {
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
        </div>
      </ProfileUserContainer>
      <div>
        {" "}
        <input
          type="text"
          placeholder="Pesquise um nome de usuário do Github"
        />
      </div>
    </div>
  );
}
