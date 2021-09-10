import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  padding: 20px;
  width: 65%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const RightContent = styled.div`
  padding: 20px;
  width: 35%;

  @media (max-width: 980px) {
    width: 100%;
  }
`;


export const Stats = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

