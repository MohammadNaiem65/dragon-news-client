import Header from "../pages/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = () => {
	return (
		<div className=''>
			<Header />
			<Container>
				<Row>
					<Col>1 of 3</Col>
					<Col lg='6'>2 of 3</Col>
					<Col>3 of 3</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Main;
