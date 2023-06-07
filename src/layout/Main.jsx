import Header from "../pages/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSidebar from "../shared/LeftSidebar";
import { Outlet } from "react-router-dom";
import RightSidebar from "../shared/RightSidebar";

const Main = () => {
	return (
		<div className=''>
			<Header />
			<Container>
				<Row>
					<Col>
						<LeftSidebar />
					</Col>
					<Col lg='6'>
						<Outlet />
					</Col>
					<Col>
						<RightSidebar />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Main;
