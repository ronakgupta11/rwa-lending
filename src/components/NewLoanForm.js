import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

function NewLoanForm() {
  return (
    <div className="bg-transparent text-white">
        <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Y" className='text-white' />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password"  className='text-white'/>
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" className='text-white'/>
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <Button type="submit">Request new loan</Button>
    </form>

    </div>
  )
}

export default NewLoanForm