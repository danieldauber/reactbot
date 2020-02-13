import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.pos === 'left' ? 'flex-start' : 'flex-end')};
  justify-content: center;
`;

export const Author = styled.div``;
