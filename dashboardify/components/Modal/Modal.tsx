"use client";
import React, { FormEvent, useState } from "react";
import styles from "./Modal.module.css";
import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "@/lib/hooks";
import { addWidget } from "@/lib/features/widget/widgetSlice";
import { widgetState } from "@/lib/features/widget/widgetSlice";
import { uuid } from "uuidv4";

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
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const file = Object(formData.get("jsonData"));
    setFile(file);
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      if (reader.result !== null) {
        const jsonData = JSON.parse(reader.result as string);
        const values: widgetState = {
          widgetName: formData.get("widgetName")?.toString() || "",
          dashboardName: formData.get("dashboardName")?.toString() || "",
          widgetData: jsonData,
          id: uuid(),
        };
        dispatch(addWidget(values));
      } else {
        console.error("Failed to read file");
      }
    };
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
          <form className={styles.widgetForm} onSubmit={handleSubmit}>
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
