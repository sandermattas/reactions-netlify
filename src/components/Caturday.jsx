import { useState, useEffect } from "react";
import "../styles/Carouselimage.css";
import "../styles/Carouselcontainer.css";

function Caturday(props) {
  const { active, url } = props;
  return (
    <div className={`Carouselimage ${active && "Redborder"}`}>
      <img src={url} alt="Kot mayak 🐈" />
    </div>
  );
}

export default Caturday;
