import styled from "styled-components";

export const RepositoryCard = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  width: 416px;
  height: 260px;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    gap: 30px;
    display: flex;
    h2 {
      width: 286px;
    }
  }
`;
