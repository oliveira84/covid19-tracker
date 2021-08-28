import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;

  :nth-last-child(1) {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }

  text-align: center;
  flex: 1;

  h2 {
    color: ${props => (props.title === "Cases" ? "red" : props.title === "Recovered" ? "green" : "darkred")};

  }
`;
