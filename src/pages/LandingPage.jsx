import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <div className="relative flex-1 overflow-y-hidden">
      <main className="heroImg relative gap-y-8 flex  text-center text-white">
        {/* <div className="rounded-full bg-primaryColor p-8 absolute -mt-2 ml-12">

        </div> */}
        <div className="flex flex-col m-auto gap-y-12">
          <h1 className="md:text-[90px] flex-1 z-[100] text-[40px] font-bold md:leading-[84px] leading-[40px]">
            Unlock Privacy
            <br /> Prove Legitimacy{" "}
            <br/> Easy Pay
          </h1>
          <Link to={``} className="bg-primaryColor w-[200px] h-[48px] whitespace-nowrap mx-auto rounded-full px-[63.5px] py-[11.5px] text-base font-semibold leading-[25px] text-white">
            Get Started
          </Link>
        </div>
        
      </main>
    </div>
  );
}

export default LandingPage;
