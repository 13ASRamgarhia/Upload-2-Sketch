import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'

function Appointment() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<p className='w-full h-full px-6 py-3'>Start the Magic</p>}
    >
      <Modal.Header>Yet to be implemented</Modal.Header>
      
      <Modal.Actions>
        <div className="flex space-x-6 py-4">
        <button type="button" onClick={() => setOpen(false)} className='bg-black py-4 px-6 rounded-2xl text-white hover:text-white focus:text-white'>Cancel</button>
        </div>
      </Modal.Actions>
    </Modal>
  )
}

export default Appointment