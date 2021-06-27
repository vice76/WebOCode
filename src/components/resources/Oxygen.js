import React from 'react';
import ResourceCard from '../../shared/ResourceCard';

const Oxygen = () => {

    const OxygenList = [
        {
            name: "Peg Legge",
            type: "Oxygen",
            quantity: 2,
            number: "123******",
            location: "Lucknow"
        },
        {
            name: "Peg Legge",
            type: "Oxygen",
            quantity: 1,
            number: "123******",
            location: "Delhi"
        },
        {
            name: "Peg Legge",
            type: "Oxygen",
            quantity: 5,
            number: "123******",
            location: "Lucknow"
        },
        {
            name: "Peg Legge",
            type: "Oxygen",
            quantity: 4,
            number: "123******",
            location: "Kolakata"
        },
        {
            name: "Peg Legge",
            type: "Oxygen",
            quantity: 1,
            number: "123******",
            location: "Delhi"
        },
        {
            name: "Peg Legge",
            type: "Oxygen",
            quantity: 1,
            number: "123******",
            location: "Mumbai"
        }
    ];

    return (
        <div className="oxygen-list">
            {
                OxygenList.map( ( arr , index) => {
                    return(
                        <ResourceCard 
                            key={index}
                            name={arr.name}
                            type={arr.type}
                            quantity={arr.quantity}
                            number={arr.number}
                            location={arr.location}
                        />
                    )
                })
            }
        </div>
    )
}

export default Oxygen;
