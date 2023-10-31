/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ContractButton = ({children, path}) => {
    return ( 
        <Link to={path} className=" bg-black p-5 rounded-md text-white font-semibold justify-center flex">
            {children}
        </Link>
     );
}
 
export default ContractButton;