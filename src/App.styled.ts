import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 900px;
  max-height: 2200px;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 768px) {
    padding: 32px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  }
`
