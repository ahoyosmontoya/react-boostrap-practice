import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const FoodCards = () => {
  return (
    <>
           {/* 1rem = 16px. ¿Que queremos que un título tenga un tamaño de 24px? Pues le aplicamos font-size: 1.5rem;. */}
      <Card style={{ width: "18rem" }}>
        <Card Img variant="top" scr="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Cocina a su medida</Card.Title>
          <Card.Text>
            Prueba los mejoires platos hechos en casa. Solo antojate, dimos que quieers hoy..
          </Card.Text>
          <Button variant="primary">Make your order</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default FoodCards;
