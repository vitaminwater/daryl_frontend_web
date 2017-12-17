import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  border: 1px dashed #E0E0E0;
  padding: 5px;
  font-family: 'Roboto Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 200;
  margin-right: 5pt;
  resize: none;

  &:focus { outline:none; }
`;
export default TextArea;
