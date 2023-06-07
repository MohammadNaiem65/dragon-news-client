import moment from "moment/moment";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import avatar from "../assets/avater.png";

const Header = () => {
	return (
		<div className='mt-5 mb-3'>
			<div className='d-flex flex-column justify-content-center align-items-center text-'>
				<img src={logo} alt='The Dragon News' />
				<p className='my-2'>
					<small>Journalism Without Fear or Favour</small>
				</p>
				<p>
					<span className='fw-semibold me-1'>{moment().format("dddd,")}</span>
					<span>{moment().format("MMMM D YYYY")}</span>
				</p>
			</div>
			<div className='container p-3 marquee'>
				<Button variant='danger' className='rounded-0'>
					Latest
				</Button>
				<Marquee pauseOnHover='true' className='ms-3'>
					I can be a React component, multiple React components, or just some
					text.
				</Marquee>
			</div>
			<Navbar className='mt-5 mb-3'>
				<Container>
					<Nav className='justify-content-end flex-grow-1'>
						<Nav.Link href='#action1'>Home</Nav.Link>
						<Nav.Link href='#action2'>About</Nav.Link>
						<Nav.Link href='#action2'>Career</Nav.Link>
					</Nav>
					<Navbar.Collapse className='justify-content-end'>
						<Nav>
							<img src={avatar} alt='avatar image' className='avatar' />
							<Button variant='secondary'>Login</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
