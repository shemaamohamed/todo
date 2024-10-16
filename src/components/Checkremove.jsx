import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function Checkremove({name,open,onClose,remove}) {
  return (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Want to Remove This Task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center'}} id="alert-dialog-description">
           Task:{name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={remove} autoFocus>
          Remove
          </Button>
          <Button variant="outlined"  onClick={onClose}>No, Keep It</Button>
        </DialogActions>
      </Dialog>
    
);

}

export default Checkremove;
