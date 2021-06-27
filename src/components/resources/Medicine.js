import React from 'react';

const Medicine = () => {

    const MedicineList = [
        {
            name: "Peg Legge",
            type: "Medicine",
            quantity: 2,
            number: "123******",
            location: "Lucknow"
        },
        {
            name: "Peg Legge",
            type: "Medicine",
            quantity: 1,
            number: "123******",
            location: "Delhi"
        },
        {
            name: "Peg Legge",
            type: "Medicine",
            quantity: 5,
            number: "123******",
            location: "Lucknow"
        },
        {
            name: "Peg Legge",
            type: "Medicine",
            quantity: 4,
            number: "123******",
            location: "Kolakata"
        },
        {
            name: "Peg Legge",
            type: "Medicine",
            quantity: 1,
            number: "123******",
            location: "Delhi"
        },
        {
            name: "Peg Legge",
            type: "Medicine",
            quantity: 1,
            number: "123******",
            location: "Mumbai"
        }
    ];


    return (
        <div className="medicine-list">
            {
                MedicineList.map( ( arr , index) => {
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

export default Medicine;
