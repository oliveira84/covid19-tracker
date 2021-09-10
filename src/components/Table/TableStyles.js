import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Countries = styled.div`
  overflow-y: scroll;
  color: #6a5d5d;
  height: 500px;

  table {
    width: 100%;

    tr {
      display: flex;
      justify-content: space-between;
    }

    td {
      padding: 0 10px;
    }

    td:nth-of-type(even) {
      text-align: right;
    }

    tr:nth-of-type(odd) {
      background-color: #f3f2f8;
    }

  }

`;

export const world = styled.div`
  flex: 1;
`;