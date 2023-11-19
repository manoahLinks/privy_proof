import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { ProviderContext } from "../context/ProviderContext";

function LandingPage() {
  const { setProvider, setAccount } = useContext(ProviderContext);
  const [hasMinipay, setHasMinipay] = useState(false);
  const getProvider = async () => {
    // Ensure MiniPay provider is available
    if (window.ethereum && window.ethereum.isMiniPay) {
      // if (window.ethereum) {
      setHasMinipay(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // alert("provider ???", provider);
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(account);
      setProvider(provider);
    } else {
      setHasMinipay(false);
      alert("MiniPay provider not detected");
    }
  };

  useEffect(() => {
    getProvider();
  }, []);

  return (
    <div className="flex h-[90vh] flex-1 flex-col">
      <main className="heroImg relative flex gap-y-8 text-center text-white">
        {/* <div className="rounded-full bg-primaryColor p-8 absolute -mt-2 ml-12">

        </div> */}
        <div className="m-auto flex flex-col gap-y-12">
          <h1 className="z-[100] flex-1 text-[40px] font-bold leading-[40px] md:text-[90px] md:leading-[84px]">
            Unlock Privacy
            <br /> Prove Legitimacy <br /> Easy Pay
          </h1>
          {hasMinipay && (
            <Link
              to={`/get-started`}
              className="mx-auto h-[48px] w-[200px] whitespace-nowrap rounded-full bg-primaryColor px-[63.5px] py-[11.5px] text-base font-semibold leading-[25px] text-white"
            >
              Get Started
            </Link>
          )}
          {!hasMinipay && (
            <Link
              to={`https://opmini.page.link/d6VPt8LBwbAxstun8`}
              className="mx-auto h-[48px] w-[200px] whitespace-nowrap rounded-full bg-green-400 px-[63.5px] py-[11.5px] text-base font-semibold leading-[25px] text-white"
            >
              Get Minipay
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
