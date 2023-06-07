import { useEffect, useState } from "react";
import "./LeftSidebar.css";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/categories")
			.then((data) => data.json())
			.then((res) => setCategories(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h3>All Categories</h3>
			<div>
				{categories.map((category) => (
					<Link
						key={category.id}
						className='fw-semibold m-0 px-5 py-3 fs-5 d-block text-decoration-none rounded-2 category'>
						{category.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default LeftSidebar;
