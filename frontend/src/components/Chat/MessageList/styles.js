import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.pos === 'bot' ? 'flex-start' : 'flex-end')};
  justify-content: center;
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
