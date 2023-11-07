import {FaSpinner} from 'react-icons/fa6'

function Spinner() {
  return (
    <div className='inset-0 flex  fixed w-full bg-slate-900 bg-opacity-50 h-screen'>
         <div className='flex flex-col items-center gap-y-8 m-auto p-5 w-6/12 h-auto bg-white rounded-lg '>
            <FaSpinner className='animate-spin' size={30} color='blue'/>
            <h4 className='text-[12px] font-bold text-slate-600'>Preparing Contract...</h4>
        </div>
    </div>
   
  )
}

export default Spinner