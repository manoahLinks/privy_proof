import { Outlet, useLocation } from "react-router-dom";
import { Navbar, TaskBar } from "../ui";

const Main = () => {
    const location = useLocation()
    return ( 
        <div className="md:hidden overflow-y-auto flex flex-col w-full h-screen">
            <Navbar/>
            <hr />
            <div className="p-3 flex-1 grid grid-cols-1 my-auto">
                <Outlet/>
            </div>
            {location.pathname !== '/' ? <TaskBar/> : ``}     
        </div>
     );
}
 
export default Main;