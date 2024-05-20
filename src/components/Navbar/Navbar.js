import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <Nav justify className="bg-dark">
      <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
      <Nav.Link as={Link} to="/fav" active={location.pathname === '/fav'}>FavList</Nav.Link>
    </Nav>
  );
}

export default NavBar;
