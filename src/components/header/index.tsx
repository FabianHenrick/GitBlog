import { HeaderContainer } from "./styles";
import { terminal_logo } from "../../../public/terminal_logo.svg";
export function Header() {
  return (
    <HeaderContainer>
      <img />
      <div>
        <img src={terminal_logo} />
        <h1>GitBlog</h1>
      </div>
      <img />
    </HeaderContainer>
  );
}
