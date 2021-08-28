import styled from "styled-components";

export const Wrapper = styled.header`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
  }

  .drop-down {
    background-color: white;
    border-radius: 5px;
    width: 150px;
    text-align: center;

    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;