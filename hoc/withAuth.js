import React from 'react';
import {withReduxSaga} from '../redux/store'
import {connect} from 'react-redux';

const withAuth = (WrappedComponent) => {
  const Wrapper = class extends React.Component {

    static async getInitialProps({ req, res, query }) {
      return {loadingAuth: true};
    }

    componentWillMount() {
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
  return withReduxSaga(connect()(Wrapper));
}

export default withAuth;
