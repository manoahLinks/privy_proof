import { createContext, useState } from "react";
import AgreementABI from "../utils/AgreementAbi.json";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { ethers } from "ethers";

export const ProviderContext = createContext();

const CONTRACT_ADDRESS = "0x9C8AAfAAC33718c9CdD478F11F9Ed37c4Fc436c8";

export const ProviderContextProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [currentContract, setCurrentContract] = useState({
    party1: "",
    party2: "",
    party1Signed: false,
    party2Signed: false,
    tokenIds: [],
    tokenUri: "",
  });
  const [id, setId] = useState(null);

  const updateId = async () => {
    if (!id) return;
    try {
      console.log("init stuff");

      if (window.ethereum) {
        console.log("eth found yeah");

        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          AgreementABI,
          provider,
        );
        const _contractDetail = await contract.getAgreementDetails(id);
        console.log("contract details is ____", _contractDetail);
        setCurrentContract({
          party1: _contractDetail[0],
          party2: _contractDetail[1],
          party1Signed: _contractDetail[2],
          party2Signed: _contractDetail[3],
          tokenIds: _contractDetail[4],
          tokenUri: _contractDetail[5],
        });
      }
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
    setId,
    updateId,
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
