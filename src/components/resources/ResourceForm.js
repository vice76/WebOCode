import React from "react";
import { Dialog, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../../scss/components/_resourceform.scss";

const useStyles = makeStyles({
  root: {
    textAlign: "left",
    minWidth: "50%",
  },
});

const ResourceForm = ({open ,handleClose }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullWidth
        className={classes.root}
        open={open}
        onClose={handleClose}
      >
        <div className="resource-form">
          <h3 className="heading" style={{ textAlign: "center" }}>
            Save a life.
          </h3>
          <div className="form-box">
            <div className="field-container">
              <h5>Your name</h5>
              <TextField
                variant="outlined"
                name="name"
                fullWidth
                autoComplete="off"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="field-container">
              <h5>Resource Type</h5>
              <FormControl variant="outlined" fullWidth>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Plasma</option>
                  <option value={20}>Oxygen</option>
                  <option value={30}>Medicines</option>
                </Select>
              </FormControl>
            </div>
            <div className="field-container">
              <h5>Contact Number</h5>
              <TextField
                variant="outlined"
                name="phonenumber"
                fullWidth
                autoComplete="off"
                placeholder="Enter your phone number"
                type="text"
              />
            </div>
            <div className="field-container">
              <h5>Location</h5>
              <TextField
                variant="outlined"
                name="location"
                fullWidth
                autoComplete="off"
                placeholder="Please give the location"
                type="text"
              />
            </div>
          </div>
          <Button className="post-btn" fullWidth>
            SUBMIT
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default ResourceForm;
