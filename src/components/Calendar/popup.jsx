import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MealTimeSelect from "./MealTimeSelect";
import '../css/Calender/Popup.css'; 

function Popup({ open, handleClose, selectedDate, onAddEvent, isMealSelected }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        className: "popup-backdrop1",
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="popup-box1" sx={{overflowY: "auto"}}>
        <MealTimeSelect
          selectedDate={selectedDate}
          onAddEvent={onAddEvent}   
          isMealSelected={isMealSelected}  
        />
      </Box>
    </Modal>
  );
}

export default Popup;
