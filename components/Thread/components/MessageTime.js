import React, { PropTypes } from 'react';
import styled from 'styled-components';

import moment from 'moment';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10pt 0pt 10pt 0pt;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  border-bottom: 1px dashed #E0E0E0;
`;

const Time = styled.div`
  top: 5pt; left: 5pt;
  color: #a0a0a0;
  font-size: 0.9em;
  margin: 0pt 20pt 0pt 20pt;
  white-space:nowrap;
`;

class LogTime extends React.PureComponent {

  render() {
    const {
      log,
    } = this.props;
    return (
      <Container>
        <Line />
        <Time>
          {moment(log.get('inserted_at')).format('MMM Do YY')}
        </Time>
        <Line />
      </Container>
    );
  }

}

export default LogTime;
