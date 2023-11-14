import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Cart from '../pages/Cart';
function NavBar(props) {
    const [show,setShow] = useState(false)
    const handelShow = ()=>{
        setShow(true)
    }
    const handelClose = () => setShow(false)
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">My Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>                     
                    </Nav>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                onChange={e => props.setValue(e.target.value)}
                        />
                    </form>
                    <Nav.Link href="connect" style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LoginIcon className='mt-2'/>
                    </Nav.Link>
                    <Button
                    onClick={handelShow}
                    ><ShoppingCartOutlinedIcon className='mt-2 mx-2'/></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handelClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Products Cart
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cart/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handelClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NavBar;