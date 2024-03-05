import Badge from 'react-bootstrap/Badge';

const Tags= ({color, raza}) => {
  return (
    <div>
      <h3>
        <Badge bg={color}>{raza}</Badge>
      </h3>
    </div>
  );
}

export default Tags;