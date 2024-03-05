import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({imagen, nombre, descripcion, color, raza}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="img" variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Tags color={color} raza={raza}/>
      </Card.Body>
    </Card>
  );
}

export default MyCard;