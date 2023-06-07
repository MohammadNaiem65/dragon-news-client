import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faGithub,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
import cardBg from "../assets/bg.png";

const RightSidebar = () => {
	return (
		<div>
			<div className='mb-5'>
				<h3 className='mb-3'>Login With</h3>
				<div>
					<Link className='w-100 fs-5 btn btn-outline-primary mb-2'>
						<FontAwesomeIcon icon={faFacebook} className='me-1' />
						Login with Google
					</Link>
					<Link className='w-100 fs-5 btn btn-outline-dark'>
						<FontAwesomeIcon icon={faGithub} className='me-1' />
						Login with GitHub
					</Link>
				</div>
			</div>
			<div className='mb-5'>
				<h3 className='mb-3'>Find Us On</h3>
				<Card>
					<ListGroup variant='flush'>
						<ListGroup.Item
							className='fs-4 d-flex align-items-center'
							role='button'>
							<FontAwesomeIcon
								icon={faFacebook}
								className='p-1 text-primary rounded-circle'
							/>
							Facebook
						</ListGroup.Item>
						<ListGroup.Item
							className='fs-4 d-flex align-items-center'
							role='button'>
							<FontAwesomeIcon
								icon={faTwitter}
								className='p-1 mx-1 text-primary bg-secondary-subtle rounded-circle'
								style={{
									boxSizing: "border-box",
									width: "26px",
									height: "26px",
								}}
							/>
							Twitter
						</ListGroup.Item>
						<ListGroup.Item
							className='fs-5 d-flex align-items-center'
							role='button'>
							<FontAwesomeIcon
								icon={faInstagram}
								className='p-1 mx-1 bg-secondary-subtle rounded-circle'
								style={{
									boxSizing: "border-box",
									width: "28px",
									height: "28px",
									color: "rgba(216, 45, 126, 1)",
								}}
							/>
							Instagram
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</div>
			<div className='bg-secondary-subtle p-3 mb-5'>
				<h3 className='mb-3'>Q-Zone</h3>
				<img src={qZone1} alt='' className='mb-4' />
				<img src={qZone2} alt='' className='mb-4' />
				<img src={qZone3} alt='' />
			</div>
			<div className='position-relative' style={{ height: "580px" }}>
				<img
					src={cardBg}
					alt=''
					className='w-100 position-absolute top-0 start-0 z-0'
				/>
				<div className='w-100 h-100 text-white text-center d-flex flex-column justify-content-center gap-2 position-relative z-3'>
					<h2>
						Create an
						<br />
						Amazing <br />
						Newspaper
					</h2>
					<p>
						Discover thousands of options, easy to customize layouts, one-click
						to import demo and much more.
					</p>
					<Link className='w-50 mx-auto btn btn-danger rounded-0'>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RightSidebar;
