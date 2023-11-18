import React, { useEffect, useState } from "react";
import AgreementABI from "../utils/AgreementAbi.json";
import { ContractCard, Spinner } from "../ui";

const UserContracts = () => {
  const CONTRACT_ADDRESS = "0x9C8AAfAAC33718c9CdD478F11F9Ed37c4Fc436c8";

  const [hasContracts, setHasContracts] = useState(false);
  const [userContracts, setUserContracts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { provider } = useContext(ProviderContext);

  const checkUserContracts = async () => {
    try {
      setLoading(true);

      // Create a contract instance
      const Contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        AgreementABI,
        provider,
      );

      const _userContracts = await Contract.getParty1Agreements();
      console.log("Users Contracts are ____", _userContracts);
      if (_userContracts.length > 0) {
        setHasContracts(true);
        setUserContracts(_userContracts);
      }
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error Fetching Users Agreements",
        footer: error.message,
      });
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserContracts();
  }, []);
  return (
    <div>
      <h1 className="mb-[17px] text-[18px] font-semibold leading-default text-black">
        Your Contracts
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[25px] gap-y-[25px]">
        {hasContracts &&
          userContracts.map((contract) => <ContractCard id={contract} />)}
        {!hasContracts && <p>No contracts</p>}
        {loading && <Spinner message="Loading Your Contracts" />}
      </div>
    </div>
  );
};

export default UserContracts;
