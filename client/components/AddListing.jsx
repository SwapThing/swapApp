import React, { Component } from 'react';

const AddListing = (props) => {
    return (
        <div className="addListingContainer">
            <form className="addListingForm" action="/signup" method="POST">
        <h1 className="createListing">Create Listing</h1>

        <label className="itemNameLabel">Give your listing a name ↡</label>
        <input className="itemName" type="text" name="itemName" placeholder="Enter item name..." required/>
            <br/>

        <label className="itemDescriptionLabel">Describe the item ↡</label>
        <input className="itemDescription" id="entrybox" name="itemDescription" placeholder="Enter item description..." required/>
            <br/>
            
        <label className="selectCategoryLabel">Select Category ↡</label>
        <select id="selectCategory" className="selectCategory" name="selectCategory" required>
            <option value="" hidden disabled selected>Select Category ♲ </option>
            <option value="Home">Home</option>
            <option value="Toys">Toys</option>
            <option value="Auto">Auto</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Art">Art</option>
            <option value="Jewelry">Jewelry</option>
        </select> <br/>

        <label className="selectConditionLabel">Describe item condition ↡</label>
        <select id="selectCondition" className="selectCondition" name="selectCondition" required>
            <option value="" hidden disabled selected>Select Item Condition ♲</option>
            <option value="Very Used">Very Used</option>
            <option value="Lightly Used">Lightly Used</option>
            <option value="Like New">Like New</option>
            <option value="Mint">Mint</option>
            <option value="Brand Nu">Brand Nu</option>
        </select> 
        <br/>
        
        <label className="estimatedValueLabel">Enter estimated value ↡</label>
        <input className="estimatedValue" type="number" name="estimatedValue" placeholder="Enter estimated value..." required/>

        <br/>
        <input className="createListingButton" id="createListingButton" type="submit" value="Create Listing!" />
    </form>
        </div>
    )
};

export default AddListing;