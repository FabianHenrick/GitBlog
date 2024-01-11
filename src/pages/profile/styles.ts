import styled from "styled-components";

export const ProfileUserContainer = styled.div`
  gap: 32px;
  padding: 40px 32px;
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

  div {
    display: flex;
    flex-direction: column;
    height: 148px;
    gap: 12px;

    div {
      display: flex;
      flex-direction: row;
      gap: 2rem;
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
  }

  img {
    width: 148px;
    border-radius: 8px;
  }
`;

export const IssueSearchContainter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;
