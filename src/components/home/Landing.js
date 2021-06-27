import React, { useState } from 'react';
import Virus from '../../assets/virus.png';
import Resourcedialog from '../../shared/Resourcedialog';

const Landing = () => {
    const [open , setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="landing-container">
            <div className="container">
                <div className="container-left">
                   <h1>Save A Life</h1>
                   <p>Connect to help others</p>
                   <div className="button-container">
                       <button className="add-button">Add Resources</button>
                       <button className="view-button" onClick={openDialog}>View Resources</button>
                   </div>
                </div>
                <div className="container-right">
                    <img src={Virus} alt="virus"/>
                </div>
            </div>
            {open && <Resourcedialog open={open} handleClose={handleClose}/>}
        </div>
    )
}

export default Landing;
