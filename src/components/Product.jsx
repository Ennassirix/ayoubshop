import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Badge } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Product({ title, description, price, rating, stock, brand, category, thumbnail, id }) {
    return (
        <Col className='mb-3' key={id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text className='d-flex justify-content-between'>
                        <span>
                            {price}$
                        </span>
                        <Badge bg="warning" text="dark">
                            {rating}/5
                        </Badge>
                    </Card.Text>
                    <Card.Text>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>See More...</Accordion.Header>
                                <Accordion.Body>
                                    <small className='text-danger'>{category }</small><br />
                                    {description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Text>
                    <span className='d-flex justify-content-between'>
                        <Button variant="primary"><AddShoppingCartIcon/></Button>
                    <Badge pill className='bg-light text-dark'>{stock}</Badge>
                    </span>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Product;