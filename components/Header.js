import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg='light' expand='lg'>
    <Navbar.Brand>
      <Container>
        <Navbar.Brand href='/'>michaeldipaolo.com</Navbar.Brand>
      </Container>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Link href='/resume'>
          <a>Resume</a>
        </Link>
        <Link href='/dunkin'>
          <a>Sabermetrics</a>
        </Link>
        <Link href='/kits'>
          <a>Kits</a>
        </Link>
        <Link href='/trophy-cabinet'>
          <a>Trophy Cabinet</a>
        </Link>
      </Nav>
      <Navbar.Text>
        <Link href='https://twitter.com/NotNotMichael'>
          <a target='_blank'>
            Twitter
          </a>
        </Link>
        <Link href='https://www.instagram.com/dipaolosaccount/'>
          <a target='_blank'>
            Instagram
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/actuallymichaeldipaolo/'>
          <a target='_blank'>
            Linkedin
          </a>
        </Link>
        <Link href='https://myanimelist.net/animelist/NotMichael?status=7&order=4&order2=0'>
          <a target='_blank'>
            MAL
          </a>
        </Link>
        <Link href='https://www.instagram.com/saturdaysfootballchicago/'>
          <a target='_blank'>
            SF Chicago
          </a>
        </Link>
      </Navbar.Text>  
    </Navbar.Collapse>
  </Navbar>
);

export default Header;