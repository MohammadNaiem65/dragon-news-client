import moment from "moment/moment";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import "./Header.css";

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
				<Marquee pauseOnHover='true'>
					I can be a React component, multiple React components, or just some
					text.
				</Marquee>
			</div>
		</div>
	);
};

export default Header;
