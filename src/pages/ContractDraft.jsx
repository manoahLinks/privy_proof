function ContractDraft() {
  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-center font-semibold">Prompt Master</h4>
      <form className="grid grid-cols-1 gap-y-2">
        <div className="flex flex-col gap-y-1">
          <label>Name of recieving party</label>
          <input 
            type="text" 
            name=""
            className="placeholder-slate-300 rounded-full p-2 border-slate-300"
            placeholder="enter name of 1st party" 
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label>Name of other party</label>
          <input 
            type="text" 
            name=""
            className="placeholder-slate-300 rounded-full p-2 border-slate-300"
            placeholder="enter name of 2nd party" 
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-1">
            <label>Start date</label>
            <input 
              type="date" 
              name=""
              className="placeholder-slate-300 rounded-full p-2 border-slate-300"
              
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label>End date</label>
            <input 
              type="date" 
              name=""
              className="placeholder-slate-300 rounded-full p-2 border-slate-300"
              
            />
          </div>
        </div>
        

        <div className="flex flex-col gap-y-1">
          <label>Type of contract</label>
          <select  
            name=""
            className="placeholder-slate-300 rounded-full p-2 border-slate-300"
             
          >
            <option>Select</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-1">
          <label>Duration of contract</label>
          <textarea 
            type="date" 
            name=""
            className="placeholder-slate-300 rounded-lg p-2 border-slate-300"
            placeholder=""
             rows={4}
          />
        </div>

        <button className="p-2 rounded-full bg-[#0D47A1] text-white mt-20">Preview</button>
      </form>
    </div>
  );
}

export default ContractDraft;
