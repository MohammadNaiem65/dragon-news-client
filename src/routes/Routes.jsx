import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
]);

export default Routes;
