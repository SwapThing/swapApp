import React, { Component } from 'react';
import { render } from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

class LoginPage extends Component {

  // async responseGoogle(response) {
  //   const idToken = response.tokenId;
  //   await axios.get('/validate', {
  //     headers: {
  //       tokenType: 'Bearer',
  //       authorization: idToken
  //     }
  //   })
  //   .then(function(response) {
  //     console.log('this is response within axios to get validate:', response)
  //     verifyUser(response);

  //   })
  //   .then(function(error) {
  //     console.log('error message within axios get:', error)
  //   });
  // };

  render(props) {

    const responseGoogle = response => {
      const idToken = response.tokenId;
      axios.get('/validate', {
        headers: {
          tokenType: 'Bearer',
          authorization: idToken
        }
      })
      .then(function(response) {
        console.log('this is response within axios to get validate:', response)
        this.verifyUser(response);
      })
      .then(function(error) {
        console.log('error message within axios get:', error)
      });
    };

    return (
      <div className="loginBox">

        <h1 className="loginWelcome">S W A P</h1>

            <div className="loginText1"> 
                <i> Charter your next barter with eaze </i>
                </div>

        <div className="loginText2Box">
            <div className="loginText2">
              ↠ Click below to sign in or create an account with Google™ 
            </div>
          </div>

        <div className="oauthContainer">
          {/* <button className="googleLogin" 
          onClick={() => {
              console.log('google Login has been clicked!')
              this.props.verifyUserAsyncThunk()}}
              > */}
          <GoogleLogin
            // onClick={() => {
            //   console.log('google Login has been clicked!')
            //   props.verifyUserAsyncThunk()}}
            // className="googleLoginPlugin"
            className="googleLogin"
            clientId="382771863992-hu7olpe3sfiae910a1urf4orija474oj.apps.googleusercontent.com"
            buttonText="Sign in with Google"

            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            fetchBasicProfile="true"
          />
          {/* </button> */}
        </div>

      </div>
    );
  }
}

export default LoginPage;
