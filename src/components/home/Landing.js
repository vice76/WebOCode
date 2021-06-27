import React, { useState } from 'react';
import Virus from '../../assets/virus.png';
import Resourcedialog from '../../shared/Resourcedialog';
import ResourceForm from '../resources/ResourceForm'; 

const Landing = () => {
    const [open , setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openForm , setOpenForm] = useState(false);
    const handleopenForm = () => setOpenForm(true);
    const handleFormClose = () => setOpenForm(false);

    return (
        <div className="landing-container">
            <div className="container">
                <div className="container-left">
                   <h1>Save A Life</h1>
                   <p>Connect to <span>help</span> others</p>
                   <div className="button-container">
                       <button className="add-button" onClick={handleopenForm}>Add Resources</button>
                       <button className="view-button" onClick={openDialog}>View Resources</button>
                   </div>
                </div>
                <div className="container-right">
                    <img src={Virus} alt="virus"/>
                </div>
            </div>
            {open && <Resourcedialog open={open} handleClose={handleClose}/>}
            {openForm && <ResourceForm open={openForm} handleClose={handleFormClose}/>}
        </div>
    )
}

export default Landing;
