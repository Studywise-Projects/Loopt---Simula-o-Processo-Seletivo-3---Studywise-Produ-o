import {
  Button as ButtonMui,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import Button from '../Button/Button';

interface IAlertDialog {
  buttonText: string;
  dialogTitle: string;
  dialogText: string;
  disagreeButtonText: string;
  agreeButtonText: string;
  handleClickDisagree: any;
  handleClickAgree: any;
}

function AlertDialog({
  buttonText,
  dialogTitle,
  dialogText,
  disagreeButtonText,
  agreeButtonText,
  handleClickDisagree,
  handleClickAgree,
}: IAlertDialog) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        data-testid='open-dialog-button'
        text={buttonText}
        handleClick={handleClickOpen}
        isAuxButton={true}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonMui
            data-testid='disagree-button-alert-dialog'
            onClick={() => {
              handleClickDisagree();
              handleClose();
            }}
          >
            {disagreeButtonText}
          </ButtonMui>
          <ButtonMui
            data-testid='agree-button-alert-dialog'
            onClick={() => {
              handleClickAgree();
              handleClose();
            }}
            autoFocus
          >
            {agreeButtonText}
          </ButtonMui>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
