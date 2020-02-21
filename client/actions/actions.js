import * as types from './actionTypes';

export const loginDisplayToggle = () => ({
    type: types.LOGIN_DISPLAY_TOGGLE,
});

export const signupDisplayToggle = () => ({
    type: types.SIGNUP_DISPLAY_TOGGLE,
});

export const feedDisplayToggle = () => ({
    type: types.FEED_DISPLAY_TOGGLE,
});

// export const isLoggedIn = () => ({
//     type: types.IS_LOGGED_IN,
// });

export const addListingToggle = () => ({
    type: types.ADD_LISTING_TOGGLE,
});

export const userItemsDisplayToggle = () => ({
    type: types.USER_ITEMS_DISPLAY_TOGGLE,
});

export const barterDisplayToggle = () => ({
    type: types.BARTER_DISPLAY_TOGGLE,
});


//below is the grab information with fetch, handle thunk async
export const verifyUserAsyncThunk = () => {
    console.log('Coming from inside actions for verifyUser')
    return dispatch => {
        dispatch(fetchingStarted());

        fetch(`/validate`)
            .then(response => response.json())
            .then(userInfo => {
                console.log('userInfo within verifyUserAsyncThunk fetch request in actions:', userInfo)
                dispatch(currentUser(userInfo))
            })
            .catch(err => {
                dispatch(fetchingFail(err));
            })
    }   
};


//action for current User
const currentUser = userInfo => ({
    type: types.CURRENT_USER,
    payload: {
        userInfo
    }
});


//below is fetching started actions
const fetchingStarted = () => ({
    type: types.FETCHING_STARTED
  });
  

const fetchingFail = err => ({
    type: types.FETCHING_FAIL,
    payload: {
      err
    }
  })