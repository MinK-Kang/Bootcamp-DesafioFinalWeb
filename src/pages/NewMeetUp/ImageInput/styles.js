import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 350px;
      width: auto;
      border-radius: 10px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #000;
      opacity: 0.2;

      &:hover {
        opacity: 0.3;
      }

      strong {
        color: #fff;
        margin-top: 20px;
      }
    }

    input {
      display: none;
    }
  }
`;
