import { BtnWide } from "../ui";

function LandingPage() {
  return (
    <div className="relative h-[100vh] overflow-y-hidden">
      <main className="heroImg md:h-[929px] h-screen pt-[167px] relative gap-y-8 flex flex-col text-center text-white">
        <div className="rounded-full bg-primaryColor p-8 absolute -mt-2 ml-12">

        </div>
        <h1 className="md:mb-[27px] md:text-[90px] z-[100] text-[40px] font-bold md:leading-[84px]">
          Unlock Privacy
          <br /> Prove Legitimacy{" "}
          <br/> Easy Pay
        </h1>
        <BtnWide  onClick={''}>Get Started</BtnWide>
      </main>
    </div>
  );
}

export default LandingPage;
