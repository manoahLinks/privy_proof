import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateIdentityPage() {

  const Navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const inputChange = (e) => {
    setFormData((prevState) => ({
        ...prevState, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    Navigate(`/get-started`)
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label>Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={inputChange}
            className="rounded-full placeholder-text-300"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Password</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={inputChange}
            className="rounded-full placeholder-text-300"
            placeholder="**********"
          />
        </div>
        <button className="text-white p-2 rounded-full bg-[#0D47A1] mt-[40px]" type="submit">Continue</button>
      </form>
    </div>
  );
}

export default CreateIdentityPage;
