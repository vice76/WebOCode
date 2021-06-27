import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { NavLink } from "react-router-dom";

const Resourcedialog = ({open,handleClose}) => {
  
  return (
    <div className="resourcedialog">
      <Dialog open={open} onClose={handleClose}>
        <h3 style={{ textAlign: "center", padding: "2rem" }}>Medical Help</h3>
        <div className="resources">
          <div className="resourceone">
            <Button
              variant="outlined"
              component={NavLink}
              to={"/resources/oxygen"}
              activeClassName="cta"
            >
              OXYGEN
            </Button>
          </div>
          <div className="resourcetwo">
            <Button
              variant="outlined"
              component={NavLink}
              to={"/resources/medicine"}
              activeClassName="cta"
            >
              MEDICINE
            </Button>
          </div>
          <div className="resourcethree">
            <Button
              variant="outlined"
              component={NavLink}
              to={"/resources/plasma"}
              activeClassName="cta"
            >
              PLASMA
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Resourcedialog;
