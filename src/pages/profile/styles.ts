import styled from "styled-components";

export const ProfileUserContainer = styled.div`
  gap: 32px;
  padding: 40px 32px;
  padding-top: 70px;
  display: flex;
  width: 864px;
  height: 212px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 320px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme["base-profile"]};

  img {
    width: 148px;
    border-radius: 8px;
  }
`;

export const ProfileNavegationContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: space-between;
  width: 94%;
  top: 8%;
  a {
    color: ${(props) => props.theme["blue"]};
  }
`;

export const ProfileInformationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 148px;
  gap: 12px;

  div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;

    i {
      span {
        margin-left: 8px;
        color: ${(props) => props.theme["base-subtitle"]};
        font-family: Nunito;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 25.6px */
      }
    }
  }
`;
export const RepositorysContainer = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const RepositorySearchContainter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    height: 36px;
    width: 864px;
    border-radius: 6px;
    border: 1px solid var(--Base-Border, #1c2f41);
    background: ${(props) => props.theme["base-input"]};
    color: var(--Base-Label, #3a536b);

    /* Text/Text M */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }

  button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 530px;
    left: 1131px;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme["base-border"]};
  }
`;

export const RepositoryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    gap: 2rem;
    display: grid;
    grid-template-columns: 416px 260px;
    width: 864px;
  }
`;
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
