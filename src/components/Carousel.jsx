import { useState } from "react";
import Caturday from "./Caturday";
import "../styles/Carouselcontainer.css";

function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const { pictureURLs, catAmount, increaseCatAmount } = props;

  const catArray = new Array(catAmount);

  const clickNext = () => {
    setCurrent(current === catArray.length - 1 ? 0 : current + 1);
    increaseCatAmount();
  };
  const clickPrevious = () => {
    setCurrent(current === 0 ? catArray.length - 1 : current - 1);
  };

  return (
    <div className="Carouselcontainer">
      <button onClick={clickPrevious}>⇦</button>
      {pictureURLs.map((element, index) => (
        <Caturday
          key={element.id}
          url={element.url}
          active={index === current}
        />
      ))}
      <button onClick={clickNext}>⇨</button>
    </div>
  );
}

export default Carousel;
