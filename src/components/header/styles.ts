import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  background: linear-gradient(
    0deg,
    rgba(11, 54, 97, 1) 0%,
    rgba(7, 53, 99, 1) 52%,
    rgba(11, 27, 43, 1) 100%
  );
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
