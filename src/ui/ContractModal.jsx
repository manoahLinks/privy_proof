/* eslint-disable react/prop-types */
const ContractModal = ({contract}) => {
    return ( 
        <div className="w-full inset-0 fixed h-screen bg-slate-900 p-3 bg-opacity-50 overflow-y-auto">
            <div className="mx-auto my-auto  p-5 rounded-lg shadow-lg bg-white gap-y-4 flex flex-col">
                <h4 className="text-center font-bold">Contract</h4>
                <h4 className="text-xs">
                    {contract}
                </h4>
                <button className="p-2 rounded-full bg-[#0D47A1] text-white w-full">Sign</button>
            </div>
        </div>
     );
}
 
export default ContractModal;