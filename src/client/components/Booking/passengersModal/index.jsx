import { useState, useEffect } from "react";
import "./index.css";
import React from "react";
import Modal from "react-bootstrap/Modal";

import Slider from "@mui/material/Slider";

function PassengersModal({ show, handleClose }) {
  function valuetext(value) {
    return `${value}i`;
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="passenger-modal-title">
            Passengers Number
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            style={{ height: "18px" }}
            getAriaValueText={valuetext}
            color="success"
            componentsProps={{
              thumb: {
                style: {
                  height: 20,
                  width: 20,
                  backgroundColor: "blue",
                  borderRadius: "50%",
                },
              },
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PassengersModal;
