// npm packages
import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';

// our packages
import {updateClicks, resetClicks, logoutUser} from '../../store/actions';
import Header from '../../components/Header';

// style
import './home.scss';

const mapDispatchToProps = dispatch => ({
  addClick: payload => dispatch(updateClicks(payload)),
  reset: payload => dispatch(resetClicks(payload)),
  logout: () => dispatch(logoutUser()),
});

const mapStateToProps = state => ({
  clicks: state.clicks.clicks,
  isFetching: state.clicks.isFetching,
  id: state.auth.user._id,
  token: state.auth.token,
  name: state.auth.user.github.displayName,
});

const Home = ({clicks, isFetching, addClick, reset, id, token, name, logout}) => {
  const handelClick = () => {
    addClick({id, token});
  };

  const handelReset = () => {
    reset({id, token});
  };

  return (
    <div className="Home">
      <p className="Home-welcome">Welcome, {name}!</p>
      <Header pageName="Profile" path="/profile" logout={logout} />
      <h1>Home Page</h1>
      <h4>You have clicked the button {isFetching ? '-' : clicks} time{clicks === 1 ? '' : 's'}.</h4>
      <div className="Home-btnContainer">
        <Button bsStyle="info" onClick={handelClick}>Click Me!</Button>
        <Button onClick={handelReset}>Reset</Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
