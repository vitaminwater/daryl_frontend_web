import React, { PropTypes } from 'react';
import styled from 'styled-components';

import moment from 'moment';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  height: 1px;
  border-bottom: 1px dashed #E0E0E0;
`;

const Date = styled.div`
  top: 5pt; left: 5pt;
  color: #a0a0a0;
  font-size: 0.8em;
  margin: 0pt 5pt 0pt 5pt;
  white-space:nowrap;
`;

class LogDate extends React.PureComponent {

  render() {
    const {
      log,
    } = this.props;
    return (
      <Container>
        <Line />
        <Date>
          {moment(log.get('inserted_at')).format('LT')}
        </Date>
        <Line />
      </Container>
    );
  }

}

export default LogDate;
