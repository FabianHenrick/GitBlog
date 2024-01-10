import { HeaderContainer, HomeContainer } from "./styles";
import SvgPageIcon from "../../../public/PageIcon";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src="../../../public/effect_left.png" />
      <NavLink to="/" title="home">
        <HomeContainer>
          <SvgPageIcon />
          <h1>Github Blog</h1>
        </HomeContainer>
      </NavLink>
      <img src="../../../public/effect_right.png" />
    </HeaderContainer>
  );
}
