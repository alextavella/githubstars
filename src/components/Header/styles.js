import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  a,
  svg {
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 5px;
  }
`;
