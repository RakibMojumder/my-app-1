import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../components/AddStudent";
import Edit from "../components/Edit";
import Login from "../components/Login";
import ManageStudent from "../components/ManageStudent";
import View from "../components/View";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><Main /></PrivateRoute>,
        children: [
            {
                path: '/',
                element: <Dashboard />,
                children: [
                    {
                        path: '/',
                        element: <AddStudent />
                    },
                    {
                        path: '/manageStudent',
                        element: <ManageStudent />
                    },
                    {
                        path: '/view',
                        element: <View />
                    },
                    {
                        path: '/edit',
                        element: <Edit />
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]);

export default router;