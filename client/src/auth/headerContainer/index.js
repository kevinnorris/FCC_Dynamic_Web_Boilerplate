// npm packages
import React from 'react';
import {connect} from 'react-redux';

import {logoutUser} from '../duck';
import Header from '../../components/Header';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

const HeaderContainer = ({pageName, path, logout}) => (
  <Header pageName={pageName} path={path} logout={logout} />
);

HeaderContainer.propTypes = {
  pageName: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  logout: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
