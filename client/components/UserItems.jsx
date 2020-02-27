import React, { Component } from 'react';

const UserItems = (props) => {
    
    let userItemsHolder = [];

    for (let i = 0; i < 5; i++) {
        userItemsHolder.push( 
            // <div className="userItem"> Barter deez! </div>
            <img className="feedItem" src="https://i.ytimg.com/vi/X8nRqcWQA2s/maxresdefault.jpg"/>
        )
    }
    return (
        <div className="userItemsContainer">
            {userItemsHolder}
        </div>
    )
};

export default UserItems;