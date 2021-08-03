import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import img1 from "../../images/pizza1.jpg";
import img2 from "../../images/hamburguesa.jpg";
import img3 from "../../images/lasagna.jpg";






const FoodCards = () => {
  return (
    <>
    <CardGroup>
           {/* 1rem = 16px. ¿Que queremos que un título tenga un tamaño de 24px? Pues le aplicamos font-size: 1.5rem;. */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Cocina a su medida</Card.Title>
          <Card.Text>
            Prueba los mejores platos hechos en casa. Solo antojate, dimos que quieers hoy..
          </Card.Text>
          <Button variant="primary">Make your order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Los mejores sabores</Card.Title>
          <Card.Text>
            Dale gusto a tu paladar, atreveta a saborear.
          </Card.Text>
          <Button variant="primary">What do yuo want?</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Mas sabores</Card.Title>
          <Card.Text>
            Que mas te gustaria probar, solo antojate
          </Card.Text>
          <Button variant="primary">Make your order</Button>
        </Card.Body>
      </Card>
      </CardGroup>
    </>
  );
};
export default FoodCards;
