import React from "react";
import LoginForm from "../forms/LoginForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    // this.submit = this.submit.bind(this);
  }

  submit = data =>
    this.props.login(data).then(() => {
      console.log(this.props.login),
      this.props.history.push('/')
    });

  render() {
    return (
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit}/>
      </div>
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
