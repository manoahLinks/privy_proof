import { useEffect, useState } from "react";
// import AgreementABI from "../utils/AgreementAbi.json";
import { ContractCard, Spinner } from "../ui";
// import { ProviderContext } from "../context/ProviderContext";
import { ethers } from "ethers";
import Swal from "sweetalert2";

const UserContracts = () => {
  const CONTRACT_ADDRESS = "0x9C8AAfAAC33718c9CdD478F11F9Ed37c4Fc436c8";

  const [hasContracts, setHasContracts] = useState(false);
  const [userContracts, setUserContracts] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const { provider } = useContext(ProviderContext);

  const checkUserContracts = async () => {
    // try {
    //   setLoading(true);

    //   // Create a contract instance
    //   const Contract = new ethers.Contract(
    //     CONTRACT_ADDRESS,
    //     AgreementABI,
    //     provider,
    //   );

    //   const _userContracts = await Contract.getParty1Agreements();
    //   console.log("Users Contracts are ____", _userContracts);
    //   if (_userContracts.length > 0) {
    //     setHasContracts(true);
    //     setUserContracts(_userContracts);
    //   }
    //   setLoading(false);
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Error Fetching Users Agreements",
    //     footer: error.message,
    //   });
    //   console.log(error.message);
    //   setLoading(false);
    // }
    try {
      // Request user accounts
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // The current selected account out of the connected accounts.
      let userAddress = accounts[0];

      // Define the interface for the smart contract
      let iface = new ethers.utils.Interface([
        "function getParty2Agreements() public view returns (uint256[] memory)",
      ]);

      // Encode the function call for the getAgreementData function
      let calldata = iface.encodeFunctionData("getParty2Agreements", []);

      // Send a read-only transaction to the smart contract using eth_call
      let result = await window.ethereum.request({
        method: "eth_call",
        params: [
          {
            from: userAddress,
            to: CONTRACT_ADDRESS,
            data: calldata,
          },
          "latest", // or specify a block number
        ],
      });

      // Decode the result
      let agreementData = iface.decodeFunctionResult(
        "getParty2Agreements",
        result,
      );

      console.log("Agreement Data:", agreementData);

      if (agreementData.length > 0) {
        setHasContracts(true);
        setUserContracts(agreementData);
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
  });
  return (
    <div>
      <h1 className="mb-[17px] text-[18px] font-semibold leading-default text-black">
        Your Contracts
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[25px] gap-y-[25px]">
        {hasContracts &&
          userContracts.map((contract, i) => (
            <ContractCard id={contract.toString()} key={i} />
          ))}
        {!hasContracts && <p>No contracts</p>}
        {loading && <Spinner message="Loading Your Contracts" />}
      </div>
    </div>
  );
};

export default UserContracts;
