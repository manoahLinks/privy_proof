import {HiBars3CenterLeft} from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import profileImg from '../assets/profile.png'

const Navbar = () => {
    const location = useLocation()
    return ( 
        <div className="flex flex-col px-2 py-2">
            {/* <h4 className="text-center">Proof pay</h4> */}
            
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-x-4'>
                    <HiBars3CenterLeft size={25}/>
                    <p className='font-semibold'>{location.pathname}</p>
                </div>
                <img src={profileImg} alt="" />
            </div>
        </div>
     );
}
 
export default Navbar;