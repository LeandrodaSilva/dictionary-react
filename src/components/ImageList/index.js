import React from "react";
import "./styles.css";
import {useSelector} from "react-redux";
import {images_map} from "../../store/imagesSlice";
import Image from "../Image";

export default function ImageList() {
  const imgs = useSelector(images_map);

  return (
    <div className="container-images">
      {
        imgs.map((img, index) => <Image key={index} file={img} />)
      }
    </div>
  )
}
