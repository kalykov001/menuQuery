import { Route, Routes } from "react-router-dom";
import Menu from "../components/pages/menu/Menu";
import Admin from "../components/pages/admin/Admin";
import Orders from "../components/pages/orders/Orders";
import Edit from "../components/pages/edit/Edit";

const MainRoutes = () => {
    const router = [
        {link:  "/" , element: <Menu/>},
        {link:  "/orders" , element: <Orders/>},
        {link:  "/admin" , element: <Admin/>},
        {link:  "/edit/:id" , element: <Edit/>},
    ]
    return (
        <Routes>
            {
                router.map((item , idx) => <Route key={idx} path={item.link} element={item.element}/>)
            }
        </Routes>
    );
};

export default MainRoutes;