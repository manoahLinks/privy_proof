import {HiOutlineDocumentText, HiOutlineBell} from 'react-icons/hi2'
import {FaPaypal} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const TaskBar = () => {

    const menu = [
        {
            id: 1,
            title: 'contract',
            icon: <HiOutlineDocumentText/>,
            path: '/'
        },

        {
            id: 2,
            title: 'pay',
            icon: <FaPaypal/>,
            path: '/'
        },

        {
            id: 3,
            title: 'notification',
            icon: <HiOutlineBell/>,
            path: '/'
        }
    ]

    return ( 
        <div className="grid grid-cols-3 bottom-0 fixed w-full bg-white py-5 justify-between md:hidden shadow">
            {menu && menu.map((item)=>(
                <Link key={item.id} to={item.path} className="flex flex-col items-center gap-y-1">
                    {item.icon}
                    <small>{item.title}</small>
                </Link>
            ))}
            
        </div>
     );
}
 
export default TaskBar;