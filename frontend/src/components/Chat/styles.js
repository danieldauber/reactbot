import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  width: 400px;
  background: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 20px;
`;

export const Chatbox = styled.div`
  height: 400px;
  overflow: auto;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Form = styled.form`
  display: flex;
  padding: 10px 0 0 0;
  input {
    padding: 10px;
    flex-grow: 1;
  }

  button {
    background: none;
    border: none;
    text-align: center;
  }
`;

export const Message = styled.div`
  display: flex;

  justify-content: ${props =>
    props.pos === 'bot' ? 'flex-start' : 'flex-end'};

  div {
    display: flex;
    flex-direction: ${props => (props.pos === 'bot' ? 'row' : 'row-reverse')};
    align-items: center;
    vertical-align: flex-end;
  }

  div div {
    padding: 10px;
  }

  div p {
    background: ${props =>
      props.pos === 'bot' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(24, 43, 120, 0.2)'};
    padding: 10px 15px;
    margin-bottom: 15px;
  }
`;
