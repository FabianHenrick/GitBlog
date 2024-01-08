import { HeaderContainer } from "./styles";
//import { terminal_logo } from "../../../public/terminal_logo.svg";
export function Header() {
  return (
    <HeaderContainer>
      <img src="../../../public/effect_left.png" />
      <div>
        <img src="" />
        <h1>GitBlog</h1>
      </div>
      <img src="../../../public/effect_right.png" />
    </HeaderContainer>
  );
}
