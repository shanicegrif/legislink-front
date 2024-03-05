import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function RepresentativeCard({ representative }) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* {<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />} */}
      <Card.Body>
        <Card.Title>{representative.short_title} {representative.first_name} {representative.last_name} {representative.suffix}</Card.Title>
        <Card.Text>
          {representative.title}{representative.state}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>District: {representative.district}</ListGroup.Item>
        <ListGroup.Item>Office: {representative.office}</ListGroup.Item>
        <ListGroup.Item>HomePage: {representative.url}</ListGroup.Item>
        <ListGroup.Item>Phone: {representative.phone}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://x.com/RepBrindisi?s=20">Link to X</Card.Link>
      </Card.Body>
    </Card>
  );
}
