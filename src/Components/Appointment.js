import React, { useState } from 'react'
import { useRef } from 'react'
import { Header,  Modal } from 'semantic-ui-react'

function Appointment() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    message: ""
  })

  const [formLoading, setFormLoading] = useState(false)
  const formRef = useRef()
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true)
    console.log(formData)
    setTimeout(() => {setFormLoading(false)}, 2000)
    setTimeout(() => setSuccess("**This functionality is yet to be implemented**"), 2100)
    setTimeout(() => {setOpen(false)}, 6000)
    setTimeout(() => setSuccess(""), 6100)
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

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