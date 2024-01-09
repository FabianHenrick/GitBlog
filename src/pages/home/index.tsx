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
        <input
          type="text"
          placeholder="Pesquise um nome de usuário do Github"
        />
      </SearchUserContainer>
      <div></div>
    </div>
  );
}
