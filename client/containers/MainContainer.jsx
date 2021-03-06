import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

import Barter from '../components/Barter.jsx';
import UserItems from '../components/UserItems.jsx';
import AddListing from '../components/AddListing.jsx';
import TopNavBar from '../components/topNavBar.jsx';
import LoginPage from '../components/loginPage.jsx';
import Feed from '../components/Feed.jsx';
import { SSM } from 'aws-sdk';

// import SwapContainer from "./SwapContainer.jsx";

const mapStateToProps = state => ({
  //toggles for rendering 
  loginDisplayTog: state.rendering.loginDisplayTog,
  signupDisplayTog: state.rendering.signupDisplayTog,
  feedDisplayTog: state.rendering.feedDisplayTog,
  addListingTog: state.rendering.addListingTog,
  userItemsDisplayTog: state.rendering.userItemsDisplayTog,
  barterDisplayTog: state.rendering.barterDisplayTog,

  //below is for swap
  currentName: state.swap.currentName,
  userId: state.swap.userId,
  googleId: state.swap.googleId,
  userEmail: state.swap.userEmail,
});

const mapDispatchToProps = dispatch => ({
  loginDisplayToggle: () => dispatch(actions.loginDisplayToggle()),
  signupDisplayToggle: () => dispatch(actions.signupDisplayToggle()),
  feedDisplayToggle: () => dispatch(actions.feedDisplayToggle()),
  addListingToggle: () => dispatch(actions.addListingToggle()),
  userItemsDisplayToggle: () => dispatch(actions.userItemsDisplayToggle()),
  barterDisplayToggle: () => dispatch(actions.barterDisplayToggle()),

  //below is from swap reducer
  verifyUser: (response) => dispatch(actions.verifyUser(response.data[0].id, response.data[0].user_name, response.data[0].email, response.data[0].googleid)),
  verifyUserAsyncThunk: () => dispatch(actions.verifyUserAsyncThunk()),
});

class MainContainer extends Component {
  render(props) {

        //below is the conditional rendering logic for the login page
        let loginPage;
        if (this.props.loginDisplayTog === true) {
            loginPage = (
                <div className="loginPage"><LoginPage
                        loginDisplayToggle={this.props.loginDisplayToggle}
                        loginDisplayTog={this.props.loginDisplayTog}
                        signupDisplayToggle={this.props.signupDisplayToggle}

                        verifyUser={this.props.verifyUser}
                        verifyUserAsyncThunk={this.props.verifyUserAsyncThunk}
                     />
                     </div>
            )
        }
    
    //conditionally rendering swapContainer to show feed upon logging in, but not when you click on any other link in navbar
    let swapContainer;
    if (this.props.feedDisplayTog === true) {
      swapContainer = <Feed />;
    } else if (this.props.addListingTog === true) {
      swapContainer = <AddListing />;
    } else if (this.props.userItemsDisplayTog === true) {
      swapContainer = <UserItems />;
    } else if (this.props.barterDisplayTog === true) {
      swapContainer = <Barter />;
    }

    return (
      <div className="fullscreen">

          {loginPage}

        <div className="mainContainer">
          {/* <button id="test" onClick={() => { 
                        console.log('I got clicked') 
                        this.props.loginDisplayToggle();
                        console.log(this.props.loginDisplayTog);
                        }} > 
                    test me!
                    </button> */}

          <div className="navBarContainer">
            <TopNavBar
              feedDisplayToggle={this.props.feedDisplayToggle}
              addListingToggle={this.props.addListingToggle}
              userItemsDisplayToggle={this.props.userItemsDisplayToggle}
              barterDisplayToggle={this.props.barterDisplayToggle}
            />
          </div>

          <div className="swapContainer">{swapContainer}</div>

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
