import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function BillsCard({ bill }) {
  return (
    <Card style={{ width: '18rem', margin:"10px 10px 10px 10px" }}>
      <Card.Body>
        <Card.Title>{bill.short_title}</Card.Title>
        <Card.Text>
          {bill.title} {bill.state}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Summary: {bill.summary_short}</ListGroup.Item>
        <ListGroup.Item>Date: {bill.latest_major_action_date}</ListGroup.Item>
        {/* <ListGroup.Item>{bill.sponsor.uri}</ListGroup.Item> */}
     </ListGroup>
    </Card>
  );
}