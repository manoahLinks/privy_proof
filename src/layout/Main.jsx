import { Outlet, useLocation } from "react-router-dom";
import { Navbar, TaskBar } from "../ui";

const Main = () => {
    const location = useLocation()
    return ( 
        <div className="md:hidden overflow-y-scroll flex flex-col w-full h-screen">
            <Navbar/>
            <hr />
            <div className="p-3 grid grid-cols-1">
                <Outlet/>
            </div>
            {location.pathname !== '/' ? <TaskBar/> : ``}     
        </div>
     );
}
 
export default Main;