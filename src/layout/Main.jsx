import { Outlet, useLocation } from "react-router-dom";
import { Navbar, TaskBar } from "../ui";

const Main = () => {
    const location = useLocation()
    return ( 
        <div className="min-h-[100vh] flex flex-col">
            <div className="flex min-h-[10%] flex-col shadow">
                <Navbar/>
            </div>
            <div className="min-h-[80%] flex-grow p-4 flex-1 ">
                <Outlet/>
            </div>
            <div className="flex min-h-[10%] bg-blue-900 shadow">
                {location.pathname !== '/' ? <TaskBar/> : ``}     
            </div>
            
        </div>
     );
}
 
export default Main;