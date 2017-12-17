import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  border-left: 6pt solid ${props => props.color || '#e0e0e0'};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10pt;
  justify-content: stretch;
  align-items: stretch;
  align-content: stretch;
`;
export default Container;
