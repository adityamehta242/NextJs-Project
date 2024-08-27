'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({className}:{className : String}) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={'/'}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </Link>
            <Link href={'/courses'}>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/all-courses">All Courses</HoveredLink>
              <HoveredLink href="/programing-lang">Programing Language</HoveredLink>
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/blockchain">Blockchain</HoveredLink>
              <HoveredLink href="/upcoming-bootcamp">Upcoming Bootcamp</HoveredLink>
              <HoveredLink href="/graphic-design">Graphic Design</HoveredLink>
              <HoveredLink href="/digital-marketing">Digital Marketing</HoveredLink>
            </div>
            </MenuItem>
            </Link><Link href={'/contact'}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            </MenuItem>
            </Link>


        </Menu>
    </div>
  )
}

export default Navbar;