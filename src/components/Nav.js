
"use client";

import { Button, Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <Navbar fluid rounded className="bg-black text-white rounded-none">
      <Navbar.Brand href="/">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">RWA</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link  className=" text-white"href="" >
          Home
        </Navbar.Link>
        <Navbar.Link className=" text-white" href="/portfolio">Portfolio</Navbar.Link>
        <Navbar.Link className=" text-white" href="/market">Market</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
