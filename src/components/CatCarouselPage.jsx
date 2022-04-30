import { useState, useEffect } from "react";
import Carousel from "./Carousel";

function CatCarouselPage() {
  const [catResponse, setCatResponse] = useState([]);

  const amount = 3;

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${amount}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatResponse(data);
      });
  }, []);

  return (
    <div>
      <Carousel pictureURLs={catResponse} catAmount={amount} />
    </div>
  );
}

export default CatCarouselPage;
