import React from 'react';

const ResourceCard = (props) => {
    return (
        <div className="resource-container">
            <div className="container">
                <div className="details">
                    <p>Name : "Sudheer Singh"</p>
                    <p>Resource : "Oxygen"</p>
                    <p>Unit : 4</p>
                    <p>Contact Number : 7565905127</p>
                    <p>Location: Lucknow</p>
                </div>
                <div className="contact-div">
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default ResourceCard;
