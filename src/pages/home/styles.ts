import styled from "styled-components";

export const SearchUserContainer = styled.div`
  gap: 32px;
  flex-shrink: 0;
  flex-direction: column;
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

  input {
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    height: 36px;
    width: 732px;
    border-radius: 6px;
    border: 1px solid var(--Base-Border, #1c2f41);
    background: var(--Base-Input, #040f1a);

    color: var(--Base-Label, #3a536b);

    /* Text/Text M */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
  div {
    display: flex;
    gap: 12px;
    align-items: center;

    button {
      border-radius: 8px;
      height: 36px;
      width: 36px;
      border: none;
      cursor: pointer;
      border: 1px ${(props) => props.theme["base-label"]} solid;
      background-color: ${(props) => props.theme["base-border"]};

      i {
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }

  input:onfocus {
  }
`;
