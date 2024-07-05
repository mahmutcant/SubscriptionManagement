import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import General from "../pages/General";
import Invitations from "../pages/Invitations";
import Billing from "../pages/Billing";
import Apps from "../pages/Apps";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/general",
                element: <General/>
            },
            {
                path: "invitations",
                element: <Invitations/>
            },
            {
                path: "billing",
                element: <Billing/>
            },
            {
                path: "apps",
                element: <Apps/>
            }
        ]
    },
    
])

export default routes;