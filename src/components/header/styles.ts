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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const HomeContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    text-decoration: none;
    font-family: Coda;
    color: ${(props) => props.theme["blue"]};
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.2);
  }
`;
