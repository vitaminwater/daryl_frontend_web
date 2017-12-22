import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import {connect} from 'react-redux';

import Loading from '../components/Loading';

import {withReduxSaga} from '../redux/store'

import { selectCreating, selectLoading, selectAuthenticated } from '../redux/selectors';

const Container = styled.div`
  flex: 1;
`;

const withAuthCheck = (loading, authenticated, redirect) => WrappedComponent => {
  const Wrapper = class extends React.Component {

    constructor() {
      super();
      this.state = {clientSide: typeof window !== 'undefined', redirecting: false};
    }

    componentWillMount() {
      this._handleProps(this.props);
    }

    componentWillReceiveProps(newProps) {
      this._handleProps(newProps);
    }

    render() {
      const { creating } = this.props;
      const loading = (this.props.loading && !creating) || !this.state.clientSide || this.state.redirecting;
      return (
        <Container>
          {(!loading || authenticated) && <WrappedComponent {...this.props} />}
          {loading && !creating && <Loading text={this.props.redirecting ? 'Redirecting...' : 'Checking auth'} />}
        </Container>
      );
    }

    _handleProps(props) {
      const { creating } = this.props;
      if (!this.state.clientSide) return;
      if (props.loading == loading && props.authenticated == authenticated && !creating) {
        this.setState({redirecting: true});
        Router.replace(redirect);
      }
    }
  }

  const mapStateToProps = (state) => ({
    creating: selectCreating()(state),
    loading: selectLoading()(state),
    authenticated: selectAuthenticated()(state),
  })

  return withReduxSaga(connect(mapStateToProps)(Wrapper));
}

const withAuth = withAuthCheck(false, false, '/welcome');
const withoutAuth = withAuthCheck(false, true, '/');

export {
  withAuth,
  withoutAuth,
}
