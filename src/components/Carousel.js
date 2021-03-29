import { useState, Fragment, useEffect } from "react";
import "./Carousel.css";
import ArrowLeft from "../components/icons/ArrowLeft";
import ArrowRight from "../components/icons/ArrowRight";
import Dot from "../components/icons/Dot";

const Carousel = (props) => {
  const [position, setPosition] = useState(0);
  const { images } = props;

  useEffect(() => {
    // cache image
    images.forEach((url) => {
      const img = new Image();
      img.src = `url(${url})`;
    });
  }, [images]);

  const selectPosition = (index) => {
    setPosition(index);
  };

  const prevImage = () => {
    const index = position - 1 === -1 ? images.length - 1 : position - 1;
    setPosition(index);
  };

  const nextImage = () => {
    const index = (position + 1) % images.length;
    setPosition(index);
  };

  return (
    <Fragment>
      {images.map((item, index) => {
        const match = position === index;
        return (
          <div
            key={`img${index}`}
            className={match ? "imageBox displayed" : "imageBox"}
          >
            {match && (
              <div
                className="image"
                style={{
                  backgroundImage: `url(${item.path})`,
                }}
              />
            )}
          </div>
        );
      })}

      <div className="page">
        {images.map((_, index) => {
          return (
            <div
              className="dot"
              key={`dot${index}`}
              onClick={() => selectPosition(index)}
            >
              <Dot
                size={12}
                index={index}
                position={position}
                active="#f86d24"
                deactive="#343434CC"
              />
            </div>
          );
        })}
      </div>

      <div className="LeftButton" onClick={prevImage}>
        <ArrowLeft size={32} color="#343434CC" />
      </div>
      <div className="RightButton" onClick={nextImage}>
        <ArrowRight size={32} color="#343434CC" />
      </div>
    </Fragment>
  );
};

export default Carousel;
