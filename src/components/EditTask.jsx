import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function EditTask({name,open,onClose,edit}) {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Are You Want to Edit This Task?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText style={{textAlign:'center'}} id="alert-dialog-description">
       Task:{name}
      </DialogContentText>
    </DialogContent>
    <Form.Control onChange={handleChange} value={value} type="text" placeholder="Edit your plan" />
    <DialogActions>
      <Button variant="outlined" color="error" onClick={() => edit(value)} autoFocus>
       Edit
      </Button>
      <Button variant="outlined"  onClick={onClose}>No, Keep It</Button>
    </DialogActions>
  </Dialog>
   
  )
}

export default EditTask
