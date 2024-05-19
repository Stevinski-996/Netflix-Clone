import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav justify  defaultActiveKey="/home" className="bg-dark ">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;