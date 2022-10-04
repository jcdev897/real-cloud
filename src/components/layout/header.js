import { Container, Navbar, Image } from "react-bootstrap"
import Menu from "../common/menu"
import Logo from './../../assets/logo.png'

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container fluid>
      <Navbar.Brand href='/'>
        <Image src={Logo} alt='Real Cloud' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Menu/>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}