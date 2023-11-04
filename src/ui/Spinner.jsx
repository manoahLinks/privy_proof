import {FaSpinner} from 'react-icons/fa6'

function Spinner() {
  return (
    <div className='flex m-auto'>
        <FaSpinner className='animate-spin' width={20} color='blue'/>
    </div>
  )
}

export default Spinner