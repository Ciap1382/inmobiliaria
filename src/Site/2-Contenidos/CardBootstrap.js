import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import houses from "../../sources/json/houses.json";
function House() {
  const cardArr = houses;
  return (
    <div className='row' style={{ marginTop: '1%', gap: '4%' }}>
      {cardArr.map((eachCard, index) => (
        <div className='col-md-3 cardContent'>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={require('../../Assets/img/'+eachCard.imagen+'.jpg')}/>
              <span class="css-1thx6yf">Venta</span>
            <Card.Body>
              <Card.Title>{eachCard.titulo}</Card.Title>
              <Card.Text>{eachCard.subtitulo}</Card.Text>
              <Button variant="primary">Info</Button>
            </Card.Body>
        </Card>
      </div>
      ))}
  </div>
  );
};
export default House;