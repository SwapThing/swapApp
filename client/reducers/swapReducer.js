import * as types from '../actions/actionTypes';

const initialState = { 
    isLoggedIn: false,
    currentName: "",
    userId: -1,
    googleId: -1,
    userEmail: "",
}

const swapReducer = ( state = initialState, action) => {
    switch (action.type) {

        // case types.IS_LOGGED_IN: {
        //     let {isLoggedIn} = state;
        //     isLoggedIn = true;
        //     return {
        //         ...state,
        //         isLoggedIn,
        //     }
        // }

        case types.CURRENT_USER: {
            console.log('action.payload.userInfo within swapReducer:', action.payload.userInfo)
            let { currentName,  userId, googleId, userEmail } = state;

            currentName = action.payload.userInfo.user_name;
            userId = action.payload.userInfo.userId;
            googleId = action.payload.userInfo.googleId;
            userEmail = action.payload.userInfo.email;

            return {
                ...state,
                currentName,
                userId,
                googleId,
                userEmail
            }
        }

        default:
            return state;
    }
}

export default swapReducer;