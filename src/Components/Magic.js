import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function Appointment() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<p className='w-full h-full px-6 py-3'>Start the Magic</p>}
    >
      <Modal.Header>
      <div className="flex flex-col justify-center w-full space-y-4">
        <div className='flex space-x-4 justify-center w-full'>
          <div className="nav-item px-4 py-1 rounded-xl border-2 border-logoColor">
            <Link to="/Login" className={`text-gray-600 hover:text-black focus:text-current font-montserrat transition-all duration-150`}>Login</Link>
          </div>
          <div className="nav-item px-4 py-1 rounded-xl border-2 border-logoColor">
            <Link to="/Signup" className={`text-gray-600 hover:text-black focus:text-current font-montserrat transition-all duration-150`}>Sign up</Link>
          </div>
        </div>

        <div className='flex space-x-4 justify-center w-full'>
         --- OR ---
        </div>

        <div className='flex space-x-4 justify-center w-full'>
          <Link to="/Prefrences" className="text-gray-600 underline hover:underline hover:text-black focus:text-current font-montserrat transition-all duration-150">Continue as Guest</Link>
        </div>
      </div>
      </Modal.Header>
      
      <Modal.Actions>
        <div className="flex space-x-6 py-4">
        <button type="button" onClick={() => setOpen(false)} className='bg-black py-4 px-6 rounded-2xl text-white hover:text-white focus:text-white'>Cancel</button>
        </div>
      </Modal.Actions>
    </Modal>
  )
}

export default Appointment