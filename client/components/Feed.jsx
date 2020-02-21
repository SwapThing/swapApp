import React, { Component } from 'react';

const Feed = (props) => {

    let feedHolder = [];

    for (let i = 0; i < 9; i++) {
        feedHolder.push(
            <img className="feedItem" src="https://cdn.orvis.com/images/DBS_AusShep_1280.jpg"/> 
            // <img src="https://cdn.orvis.com/images/DBS_AusShep_1280.jpg"></img>
            //  </div>
        )
    }


    return (
        <div className="feedContainer">
            {feedHolder}
        </div>
    )
};

export default Feed;