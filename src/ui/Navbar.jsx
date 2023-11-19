import { HiChevronLeft } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import profileImg from "../assets/profile.png";
import { useContext } from "react";
import { ProviderContext } from "../context/ProviderContext";

const Navbar = () => {
  const location = useLocation();
  const { account } = useContext(ProviderContext);
  return (
    <div className="flex flex-col px-2 py-2">
      {/* <h4 className="text-center">Proof pay</h4> */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <HiChevronLeft size={25} />
          <p className="font-semibold">
            {location.pathname.slice(1, location.pathname.length)}
          </p>
          <p className="text-sm">{account ? account : ""}</p>
        </div>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
