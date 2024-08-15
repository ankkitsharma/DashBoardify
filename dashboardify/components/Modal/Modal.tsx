"use client";
import React, { useState } from "react";
import styles from "./Modal.module.css";
import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(49, 49, 49)",
    borderRadius: "1rem",
  },
};

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="button">
        Add Widget +
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Add widget modal"
      >
        <div className={styles.modalContent}>
          <button onClick={handleClose} className={`button ${styles.closeBtn}`}>
            <IoMdClose />
          </button>
          <form className={styles.widgetForm}>
            <div className={styles.formHeading}>Add Widget data</div>
            <div className={styles.formDiv}>
              <label htmlFor="widgetName">Write widget's name:</label>
              <input type="text" name="widgetName" id="widgetName" />
            </div>
            <div className={styles.formDiv}>
              <label htmlFor="dashboardName">Write dashboard's name:</label>
              <input type="text" name="dashboardName" id="dashboardName" />
            </div>
            <div className={styles.formDiv}>
              <label htmlFor="jsonData">Upload the json Data file</label>
              <input
                type="file"
                name="jsonData"
                id="jsonData"
                className={styles.upload}
              />
            </div>
            <div className={styles.formDiv}>
              <input type="submit" value="Submit" className="button" />
            </div>
          </form>
        </div>
      </ReactModal>
    </div>
  );
}
