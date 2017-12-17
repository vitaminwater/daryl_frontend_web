import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 10pt 0 10pt;

  border-left: 6pt solid ${props => props.color || '#e0e0e0'};

  justify-content: stretch;
`;
export default Container;
