import Carousel from "react-bootstrap/Carousel";
import A from "../../images/margarita.jpeg";
import B from "../../images/tortaFrutas.jpg";
import C from "../../images/PlatanoCarne.jpg";


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
          src={B}
          alt="Second slide"
          height="450"
        />
        <Carousel.Caption>
          <h3>Torta de frutas</h3>
          <p>Pa chuparse los dedos</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={C}
          alt="third slide"
          height="450"
        />
        <Carousel.Caption>
          <h3>Lasaña</h3>
          <p>Otro pedacito mas..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default FoodCarousel;
