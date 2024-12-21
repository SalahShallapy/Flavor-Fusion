"use client";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handleClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No Image Selected Yet.</p>
          ) : (
            <Image src={pickedImage} alt="IMAGE SELECTED BU THE USER" fill />
          )}
        </div>
        <input
          ref={imageInput}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          className={classes.input}
          onChange={handleImageChange}
          required
        />
        <button onClick={handleClick} type="button" className={classes.button}>
          Select An Image
        </button>
      </div>
    </div>
  );
}
