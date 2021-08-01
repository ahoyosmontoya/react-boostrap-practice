import Carousel from "react-bootstrap/Carousel";
import A from "../../images/margarita.jpeg";

const FoodCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={A}
          alt="First slide"
          height="450"
        />
        <Carousel.Caption>
          <h3>Pizza</h3>
          <p>Hecha con amor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={A}
          alt="First slide"
          height="450"
        />
        <Carousel.Caption>
          <h3>Pizza</h3>
          <p>Hecha con amor</p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default FoodCarousel;
