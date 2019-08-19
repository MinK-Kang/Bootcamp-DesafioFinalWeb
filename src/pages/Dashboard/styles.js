import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    button {
      display: flex;
      justify-content: space-around;
      padding: 0 10px 0;
      height: 44px;
      width: 175px;
      background: #a81656;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#a81656")};
      }
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 30px 0 0;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #000;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.3 : 0.6)};

  strong {
    display: block;
    color: ${props => (props.available ? "#fff" : "#7159c1")};
    font-size: 15px;
    font-weight: normal;
    margin-left: 500px;
  }

  span {
    display: block;
    font-weight: bold;
    margin-top: 3px;
    color: ${props => (props.available ? "#fff" : "#666")};
  }

  button {
    background: transparent;
    border: 0;
  }
`;
