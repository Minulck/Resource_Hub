import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
  } from '@mui/material';
  import { useState, useEffect } from 'react';
  
  export const EditUserDialog = ({ user, open, onClose, onSave }) => {
    const [email, setEmail] = useState(user.email);
    const [userType, setUserType] = useState(user.userType);
    const [additionalDetails, setAdditionalDetails] = useState(user.additionalDetails);
  
    useEffect(() => {
      setEmail(user.email);
      setUserType(user.userType);
      setAdditionalDetails(user.additionalDetails);
    }, [user]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave({
        ...user,
        email,
        userType,
        additionalDetails,
      });
    };
  
    return (
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <div className="space-y-4 mt-2">
              <TextField
                fullWidth
                label="Email"
                value={email}
                disabled
                required
                helperText="Email cannot be changed"
              />
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  value={userType}
                  label="User Type"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Additional Details"
                multiline
                rows={4}
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  };
  