import React from 'react'

import {increment, loadData, startClock} from '../redux/actions'
import {withReduxSaga} from '../redux/store'

class Index extends React.Component {

  render () {
    return (
      <div>lol</div>
    );
  }

}

export default withReduxSaga(Index);
