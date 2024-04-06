
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import React from 'react'

function BorrowModal() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
      }
  return (
    <>
    <button onClick={() => setOpenModal(true)} className="bg-purple-600 py-4 px-6 rounded-lg text-white hover:bg-purple-700">Borrow</button>

    <Modal className="bg-gray-900" show={openModal} size="md" onClose={onCloseModal} popup>
      <Modal.Header className="bg-gray-800"/>
      <Modal.Body className="bg-gray-800 text-white">
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Borrow</h3>
          <div className="flex flex-col space-y-4 items-end">
<div>You Borrow</div>
            <div className="flex items-center justify-around w-full border border-gray-600 h-32 text-white rounded-md">
            <div className="flex space-x-2 w-full items-center ml-10">
                    <img className ="w-12 rounded-lg"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBtwQPvSqh2sIyMPElH0e0q2UuBo0GqEx3ssq2ZNjmhn1xwuuhRCI3E6_Z2BV2j79ffU&usqp=CAU"></img>
                    <p className="">USDC</p>
                </div>

            <input
            className="border-none bg-transparent focus:outline-none w-24"
              id="supply"
              placeholder="0"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              />
              </div>
          </div>

          <div className="w-full">
            <button className="w-full bg-purple-700 rounded-xl py-4">Borrow Asset</button>
          </div>
         { email && <div className="flex flex-col space-y-2">
            
            <p className="text-sm text-gray-400">Transaction Settings</p>
            <p className="text-sm text-gray-400">Deposit value</p>
            <p className="text-sm text-gray-400">Loan-to-value ratio</p>
            <p className="text-sm text-gray-400">Supply APY</p>
            <p className="text-sm text-gray-400">Utilization Ratio</p>
            <p className="text-sm text-gray-400">Asset tier</p>




          </div>}

        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default BorrowModal



