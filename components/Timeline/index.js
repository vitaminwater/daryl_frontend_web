/**
*
* Timeline
*
*/

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { ActivityIcon } from 'components/UIKit/list';

export const List = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Item = styled.div`
  background-color: white;
  margin-bottom: 10pt;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  padding: 40pt 5pt 40pt 60pt;
  background-color: ${props => props.color};
  border: 1pt solid ${props => props.selected ? '#505050' : '#afafaf'};
  border-right: none;
  margin-left: 30pt;
`;

const Image = styled(ActivityIcon)`
  position: absolute;
  top: 50%; left: 10pt;
  transform: translate(0, -50%);
  border-radius: 20pt;
  width: 40pt;
  height: 40pt;
  background-color: white;
`;

const Alt = styled.span`
  font-size: 0.9em;
  color: #555555;
`;

class Timeline extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { activities, selectedActivity } = this.props;
    return (
      <List>
        {
          activities.map((activity) => (
              <Item onClick={this._handleOpen(activity)} key={activity.get('id')}>
                <Container selected={selectedActivity && activity.get('id') == selectedActivity.get('id')} color={activity.get('color')}>
                  <Image src={activity.get('image')} />
                  {activity.get('name')}<br />
                  {activity.get('why').split('\n').map((item, key) => (
                    <Alt key={key}>{item}<br/></Alt>
                  ))}
                </Container>
              </Item>
            )
          )
        }
      </List>
    );
  }

  _handleOpen = activity => (e) => {
    e.preventDefault();
    this.props.onOpen(activity);
  }
}

Timeline.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default Timeline;
