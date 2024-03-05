import Card from 'react-bootstrap/Card';

export default function Introduction(){
    return (
        <div>
            <Card style={{background:'#D9D9D9',margin:"5px",padding:"2px 2px 2px 2px"}}>
                <Card.Body>
                    <Card.Text>
                    LegisLink is an innovative application designed to empower and inform new voters, facilitating their active participation in the democratic process. This app aims to bridge the information gap that often hinders individuals entering the world of politics by providing user-friendly, reliable, and accessible information.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}