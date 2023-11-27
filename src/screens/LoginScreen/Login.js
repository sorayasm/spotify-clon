import React from "react";
import './Login.css';
import logo from '../../assets/logo.jpg';

function Login() {
  return (
    <div className="login">
      <img className="logo" src={logo} alt="Spotify Logo"/>
      <a className="login-link" href="https://www.spotify.com">Login with Spotify</a>
    </div>
  );
}

export default Login;
