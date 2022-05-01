import { useState, useEffect } from "react";
import Carousel from "./Carousel";

const getCats = (quantity, setCatResponse) => {
  console.log("qty", quantity);
  fetch(`https://api.thecatapi.com/v1/images/search?limit=${quantity}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCatResponse(data);
    });
};

function CatCarouselPage() {
  const [catResponse, setCatResponse] = useState([]);
  const [amount, setAmount] = useState(2);

  useEffect(() => {
    getCats(amount, setCatResponse);
  }, []);

  return (
    <div>
      <Carousel
        pictureURLs={catResponse}
        catAmount={amount}
        increaseCatAmount={() => {
          getCats(amount + 1, setCatResponse);
          setAmount(amount + 1);
        }}
      />
    </div>
  );
}

export default CatCarouselPage;
