import contract from "../assets/contract.png";
function ContractCard() {
  return (
    <div className="bg-lightBlue relative flex h-fit rounded-lg justify-center py-2">
      <img src={contract} alt="" />
      <div className="bg-black absolute bottom-0 left-0 w-full py-4 rounded-lg">
        <h1 className="text-center text-base font-extrabold leading-[15px] text-[#C4C4C4]">
          NDA Contract Template
          <br />
          (Two parties)
        </h1>
      </div>
    </div>
  );
}

export default ContractCard;
