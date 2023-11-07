import { useEffect, useState } from "react";
import { ContractModal, Spinner } from "../ui";

function ContractDraft() {

  const [isPending, setIspending] = useState(false)
  const [preview, setPreview] = useState(false)
  const [data, setData] = useState()

  const [formData, setFormData] = useState({
    recievingParty: '',
    otherParty: '',
    startDate: '',
    endDate: '',
    contractType: '',
    additionalInfo: ''
  })

  useEffect(()=>{
    
  }, [data])

  const inputChange = (e) => {
    setFormData((prevState) => ({
        ...prevState, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIspending(true)
    const prompt = `create an ${formData.contractType} between ${formData.recievingParty} and ${formData.otherParty}, starting from ${formData.startDate} to ${formData.endDate}`
    
    const response = await fetch(`http://localhost:7000/create`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt})
    })

    const json = await response.json()

    if(!response.ok){
      setIspending(false)
      alert(json)   
    }

    if(response.ok){
      setIspending(false)
      setData(json.data.content)
      setPreview(true)
    }
  }

  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-center font-semibold">Prompt Master</h4>
      <form className="grid grid-cols-1 p-2 gap-y-4 text-xs">
        <div className="flex flex-col gap-y-2">
          <label>Name of recieving party</label>
          <input 
            type="text" 
            name="recievingParty"
            value={formData.recievingParty}
            onChange={inputChange}
            className="placeholder-slate-300 text-xs rounded-full p-2 border-slate-300"
            placeholder="enter name of 1st party" 
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label>Name of other party</label>
          <input 
            type="text" 
            name="otherParty"
            value={formData.otherParty}
            onChange={inputChange}
            className="placeholder-slate-300 text-xs rounded-full p-2 border-slate-300"
            placeholder="enter name of 2nd party" 
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-2">
            <label>Start date</label>
            <input 
              type="date" 
              name="startDate"
              value={formData.startDate}
              onChange={inputChange}
              className="placeholder-slate-300 text-xs rounded-full p-2 border-slate-300"
              
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label>End date</label>
            <input 
              type="date" 
              name="endDate"
              value={formData.endDate}
              onChange={inputChange}
              className="placeholder-slate-300 text-xs rounded-full p-2 border-slate-300"
              
            />
          </div>
        </div>
        

        <div className="flex flex-col gap-y-2">
          <label>Type of contract</label>
          <select  
            name="contractType"
            value={formData.contractType}
            onChange={inputChange}
            className="placeholder-slate-300 text-xs rounded-full p-2 border-slate-300"
          >
            <option value={''}>Select one</option>
            <option value={'employment'}>Employment</option>
            <option value={'lease'}>lease</option>
            <option value={'one time sale'}>one time sale</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-1">
          <label>Additional Info</label>
          <textarea 
            type="date" 
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={inputChange}
            className="placeholder-slate-300 text-xs rounded-lg p-2 border-slate-300"
            placeholder=""
             rows={4}
          />
        </div>
        <button onClick={handleSubmit} className="p-2 py-3 rounded-full bg-[#0D47A1] text-white mt-auto">Preview</button>
        {isPending && <Spinner/>}
        {/* {data && data.length > 0 && <h4>{data}</h4>} */}
      </form>
      {preview && data && <ContractModal contract={data}/>}
    </div>
  );
}

export default ContractDraft;
