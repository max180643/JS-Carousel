import "./App.css";
import Carousel from "../components/Carousel";

const App = () => {
  const images = [
    { path: "https://source.unsplash.com/eXHeq48Z-Q4/1600x900" },
    { path: "https://source.unsplash.com/KMn4VEeEPR8/1600x900" },
    { path: "https://source.unsplash.com/V2wJBB2p7eU/1600x900" },
    { path: "https://source.unsplash.com/6C4BpYUz-cM/1600x900" },
    { path: "https://source.unsplash.com/ktQuuihh3_w/1600x900" },
  ];

  return (
    <div className="container">
      <Carousel images={images} />
    </div>
  );
};

export default App;
