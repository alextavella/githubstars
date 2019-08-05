import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px;
`;

export const Content = styled.form`
  color: white;
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    display: block;
    font-size: 18px;
    opacity: 0.2;
  }

  > div {
    background: #fff;
    border: 1px solid #111;
    border-radius: 4px;

    padding: 10px;
    position: relative;
    width: inherit;
    margin-top: 6px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
      padding: 10px;
      flex: 1;
    }

    button {
      right: 0;
    }
  }
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  background: none;
  border: none;
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  background: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  > svg {
    color: #333;
    height: 100%;
    width: 100%;
  }
`;
