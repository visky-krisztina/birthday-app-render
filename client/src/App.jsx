import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Error, AddPerson, AllPersons, LandingPage, Dashboard, EditPerson, DeletePerson } from "./pages";
import { action as addPersonAction } from "./pages/AddPerson";
import { loader as allPeopleLoader } from "./pages/AllPersons";
import { loader as sortedPeopleLoader } from "./pages/SortedPeopleList";
import { loader as editPersonLoader } from "./pages/EditPerson";
import { action as editPersonAction } from "./pages/EditPerson";
import { action as deletePersonAction } from "./pages/DeletePerson";

import SortedPeopleList from "./pages/SortedPeopleList";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
				children: [
					{
						index: true,
						element: <SortedPeopleList />,
						loader: sortedPeopleLoader,
					},
					{
						path: "add-person",
						element: <AddPerson />,
						action: addPersonAction,
					},
					{
						path: "all-persons",
						element: <AllPersons />,
						loader: allPeopleLoader,
					},
					{
						path: "edit-person/:id",
						element: <EditPerson />,
						loader: editPersonLoader,
						action: editPersonAction,
					},
					{
						path: "delete-person/:id",
						element: <DeletePerson />,
						action: deletePersonAction,
					},
				],
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
