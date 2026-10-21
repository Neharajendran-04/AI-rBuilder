import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegEdit } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Edit() {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   return (
    <div>
      <Button style={{color : '#6B5546'}} className='btn' onClick={handleOpen} ><FaRegEdit  className='me-1'/>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
                        <h1>Personal Details</h1>
                        <div className='row p-3'>
                          <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                          <TextField id="standard-basic-location" label="Location" variant="standard" />
                          <FormControl variant="standard">
                            <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Job"
                            >
                              <MenuItem value={"job"}>Job</MenuItem>
            
            
                            </Select>
                          </FormControl>
            
                        </div>
                      </div>
                       <div>
                                  <h1>Contact Details</h1>
                                  <div className='row p-3'>
                                    <TextField id="standard-basic-email" label="Email" variant="standard" />
                                    <TextField id="standard-basic-contact" label="Contact Number" variant="standard" />
                                    <TextField id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                                    <TextField id="standard-basi-githubc" label="Github Link" variant="standard" />
                                  </div>
                                </div>
                        <div>
                                    <h1>Educational Details</h1>
                                    <div className='row p-3'>
                                      <TextField id="standard-basic-degree" label="Bchelor's Degree" variant="standard" />
                                      <TextField id="standard-basic-college" label="University/College Name" variant="standard" />
                                      <TextField id="standard-basic-yearofgrad" label="Year of Graduation" variant="standard" />
                                    </div>
                                  </div>

          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit
