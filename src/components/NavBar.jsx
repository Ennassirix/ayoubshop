import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function NavBar() {
    return (
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
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <Nav.Link href="connect" style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LoginIcon className='mt-2'/>
                    </Nav.Link>
                    <Nav.Link href='#cart'><ShoppingCartOutlinedIcon className='mt-2 mx-2'/></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;