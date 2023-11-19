import { createContext, useState } from "react";
// import AgreementABI from "../utils/AgreementAbi.json";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { ethers } from "ethers";

export const ProviderContext = createContext();

const CONTRACT_ADDRESS = "0x9C8AAfAAC33718c9CdD478F11F9Ed37c4Fc436c8";

export const ProviderContextProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [currentContract, setCurrentContract] = useState({
    party1: "",
    party2: "",
    party1Signed: false,
    party2Signed: false,
    tokenIds: [],
    tokenUri: "",
  });
  const [id, setId] = useState(null);

  const changeId = (_id) => {
    setId(_id);
  };

  const updateId = async () => {
    if (!id) return;
    try {
      console.log("init stuff");

      //   if (window.ethereum) {
      //     console.log("eth found yeah");

      //     const contract = new ethers.Contract(
      //       CONTRACT_ADDRESS,
      //       AgreementABI,
      //       provider,
      //     );
      //     const _contractDetail = await contract.getAgreementDetails(id);
      //     console.log("contract details is ____", _contractDetail);
      //     setCurrentContract({
      //       party1: _contractDetail[0],
      //       party2: _contractDetail[1],
      //       party1Signed: _contractDetail[2],
      //       party2Signed: _contractDetail[3],
      //       tokenIds: _contractDetail[4],
      //       tokenUri: _contractDetail[5],
      //     });
      //   }

      // Define the interface for the smart contract
      let iface = new ethers.utils.Interface([
        "function getAgreementDetails(uint256 _agreementId) public view returns (Agreement memory)",
      ]);

      // Encode the function call for the getAgreementData function
      let calldata = iface.encodeFunctionData("getAgreementDetails", [id]);

      // Send a read-only transaction to the smart contract using eth_call
      let result = await window.ethereum.request({
        method: "eth_call",
        params: [
          {
            to: CONTRACT_ADDRESS,
            data: calldata,
          },
          "latest", // or specify a block number
        ],
      });

      // Decode the result
      let agreementData = iface.decodeFunctionResult(
        "getAgreementDetails",
        result,
      );
      alert("fetched agreementDatas");

      console.log("contract details is ____", agreementData);
      setCurrentContract({
        party1: agreementData[0],
        party2: agreementData[1],
        party1Signed: agreementData[2],
        party2Signed: agreementData[3],
        tokenIds: agreementData[4],
        tokenUri: agreementData[5],
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error Fetching Users Agreements",
        footer: error.message,
      });
      console.log(error.message);
    }
  };

  const contextValue = {
    provider,
    setProvider,
    currentContract,
    setCurrentContract,
    id,
    updateId,
    account,
    setAccount,
    changeId,
  };

  return (
    <ProviderContext.Provider value={contextValue}>
      {children}
    </ProviderContext.Provider>
  );
};

ProviderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
