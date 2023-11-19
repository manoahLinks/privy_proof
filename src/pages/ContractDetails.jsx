import { useContext, useEffect, useState } from "react";
import { Spinner } from "../ui";
import Swal from "sweetalert2";
import { ProviderContext } from "../context/ProviderContext";
// import AgreementABI from "../utils/AgreementAbi.json";
import { ethers } from "ethers";

const ContractDetails = () => {
  const { currentContract, id } = useContext(ProviderContext);

  const [loading, setLoading] = useState(false);
  const [txnLoading, setTxnLoading] = useState(false);
  const [contractData, setContractData] = useState(false);
  //   const { provider } = useContext(ProviderContext);

  const CONTRACT_ADDRESS = "0x9C8AAfAAC33718c9CdD478F11F9Ed37c4Fc436c8";

  const fetchContractData = async (uri) => {
    try {
      setLoading(true);
      alert("step1");
      alert("ID IS ", id);
      alert(uri);
      const response = await fetch(`https://nftstorage.link/ipfs/${uri}`);
      alert(response);
      const data = await response.json();
      alert("step2");
      console.log("data is -----____", data);
      setContractData(data.description);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contract data:", error);
      Swal.fire({
        title: "Error",
        text: "Your process failed, data couldnt be fetched ",
        icon: "error",
      });
      // Handle the error or return an appropriate value
    }
  };

  const signContract = async () => {
    try {
      setTxnLoading(true);
      console.log("init sign message");

      if (window.ethereum) {
        console.log("eth found yeah");

        // const signer = provider.getSigner();
        // const contract = new ethers.Contract(
        //   CONTRACT_ADDRESS,
        //   AgreementABI,
        //   signer,
        // );

        // let tx = await contract.party2SignAgreement(id);

        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // The current selected account out of the connected accounts.
        let userAddress = accounts[0];

        let iface = new ethers.utils.Interface([
          "function party2SignAgreement(uint256 _agreementId) public",
        ]);

        let calldata = iface.encodeFunctionData("party2SignAgreement", [id]);

        // Send transaction to the injected wallet to be confirmed by the user.
        let tx = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: userAddress,
              to: CONTRACT_ADDRESS,
              data: calldata, // Information about which function to call and what values to pass as parameters
            },
          ],
        });

        await tx.wait();
        alert("success");
        console.log("TXNNN STATTUSS-------", tx);
        setTxnLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "You have successfully  signed your contract",
          icon: "success",
        });
      }
    } catch (err) {
      console.log("ERROR IS ____", err);
      setTxnLoading(false);
      Swal.fire({
        title: "Error",
        text: "Your process failed, agreement could not be created ",
        icon: "error",
      });
    }
  };

  const mintContract = async () => {
    try {
      setTxnLoading(true);
      console.log("init sign message");

      if (window.ethereum) {
        console.log("eth found yeah");

        // const signer = provider.getSigner();
        // const contract = new ethers.Contract(
        //   CONTRACT_ADDRESS,
        //   AgreementABI,
        //   signer,
        // );

        // let tx = await contract.mintNFTAgreement(id);
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // The current selected account out of the connected accounts.
        let userAddress = accounts[0];

        let iface = new ethers.utils.Interface([
          "function mintNFTAgreement(uint256 _agreementId) public ",
        ]);

        let calldata = iface.encodeFunctionData("mintNFTAgreement", [id]);

        // Send transaction to the injected wallet to be confirmed by the user.
        let tx = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: userAddress,
              to: CONTRACT_ADDRESS,
              data: calldata, // Information about which function to call and what values to pass as parameters
            },
          ],
        });
        await tx.wait();
        alert("success");
        console.log("TXNNN STATTUSS-------", tx);
        setTxnLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "You have successfully minted your contract",
          icon: "success",
        });
      }
    } catch (err) {
      console.log("ERROR IS ____", err);
      setTxnLoading(false);
      Swal.fire({
        title: "Error",
        text: "Your process failed, agreement could not be created ",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    fetchContractData(currentContract.tokenURI);
  }, []);

  return (
    <div className="text-black">
      <h1 className="mb-[17px] text-lg font-semibold leading-default text-black">
        Preview
      </h1>
      {!loading && (
        <div className="flex h-full justify-center  bg-secondaryColor pb-[31px] pt-[16px] text-base font-normal leading-6 text-black">
          <h2 className="font-bold">
            Agreement Between {currentContract.party1} and{" "}
            {currentContract.party2}
          </h2>
          <p className="mx-2 space-y-2">{contractData}</p>
          {(!currentContract.party1Signed || !currentContract.party2Signed) && (
            <button
              className="mt-[20px] w-[483px] self-center rounded-full bg-primaryColor py-3 text-center text-base font-semibold leading-default text-black"
              onClick={signContract}
            >
              Sign
            </button>
          )}
          {txnLoading && <Spinner message="Transaction Loading..." />}
          {currentContract.party1Signed && currentContract.party2Signed && (
            <button
              className="mt-[20px] w-[483px] self-center rounded-full bg-primaryColor py-3 text-center text-base font-semibold leading-default text-black"
              onClick={mintContract}
            >
              Mint Contract NFT
            </button>
          )}
        </div>
      )}
      {loading && <Spinner message="Preview Loading ..." />}
    </div>
  );
};

export default ContractDetails;
