import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background: #e81f63;
  border-radius: 4px;
  color: #fff;
  height: 32px;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  > div {
    width: 50px;
    height: inherit;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px 0 0 4px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    padding: 0 12px;
  }

  &:hover {
    background: ${darken(0.2, '#e81f63')};
  }
`;
