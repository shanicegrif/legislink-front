import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RepresentativeCard({ representative }) {
  return (
    <Card style={{  display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "#81b29a",
                    marginBottom: "20px",
                    //WebkitColumns
                    //-webkit-column-break-inside: avoid;
                    padding: "24px",
                    height: "400px"}}>
      {/* {<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />} */}
      <Card.Body>
        <Card.Title>{representative.short_title} {representative.first_name} {representative.last_name} {representative.suffix}</Card.Title>
        <Card.Text>
          {representative.title}{representative.state}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item style={{backgroundColor:"#81b29a", paddingLeft:"0", paddingRight:"0"}}>District: {representative.district}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#81b29a", paddingLeft:"0", paddingRight:"0"}}>Office: {representative.office}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#81b29a", paddingLeft:"0", paddingRight:"0"}}>HomePage: {representative.url}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#81b29a", paddingLeft:"0", paddingRight:"0"}}>Phone: {representative.phone}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={`https://x.com/${representative.twitter_account}`}>Link to X</Card.Link>
      </Card.Body>
    </Card>
  );
}
