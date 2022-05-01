import "./styles/App.css";
import "./components/InputBox";
import CatCarouselPage from "./components/CatCarouselPage";

// Have the Carousel coponent not give a shit about API's at all
// This file would here instead would define that, think about passing props in <Carousel />

function App() {
  return (
    <div className="App">
      <CatCarouselPage />
    </div>
  );
}

export default App;
