import { useContext, useState } from "react";
import contract from "../assets/contract.png";
import { ProviderContext } from "../context/ProviderContext";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ContractCard({ id }) {
  const Navigate = useNavigate();
  const { changeId, updateId } = useContext(ProviderContext);
  const [loading, setLoading] = useState(false);

  const viewStuff = async () => {
    try {
      setLoading(true);
      await changeId(id);
      await updateId();

      Navigate(`/contract-preview`);

      setLoading(false);
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-fit justify-center rounded-lg bg-lightBlue py-2">
      <img src={contract} alt="" />
      <div className="absolute bottom-0 left-0 w-full rounded-lg bg-black py-4">
        <h1 className="text-center text-base font-extrabold leading-[15px] text-[#C4C4C4]">
          Contract #{id}
          <br />
          <button
            className="mt-[20px] w-full self-center rounded-full bg-primaryColor py-3 text-center text-base font-semibold leading-default text-black"
            onClick={viewStuff}
          >
            View
          </button>
        </h1>
        {loading && <Spinner message="Getting ready..." />}
      </div>
    </div>
  );
}

ContractCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ContractCard;
