
"use client";

import { Button, Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <Navbar fluid rounded className="bg-black text-white rounded-none p-4">
      <Navbar.Brand href="/">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">RWA</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-purple-600 p-2">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="flex flex-row space-x-10">
        <Navbar.Link  className=" text-white text-lg"href="/" >
          Home
        </Navbar.Link>
        <Navbar.Link className=" text-white text-lg" href="/portfolio">Portfolio</Navbar.Link>
        <Navbar.Link className=" text-white text-lg" href="/market">Market</Navbar.Link>
        <Navbar.Link className=" text-white text-lg" href="/liquidity">Liquidity</Navbar.Link>
        <Navbar.Link className=" text-white text-lg" href="/swap">Swap</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
