"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames"
const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex space-x-6 border-b border-t h-16 mb-5 px-5 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <>
            <Link
              key={link.href}
              className = {classnames({
                "text-zinc-900" : link.href === pathname,
                "text-zinc-500" : link.href != pathname,
                "hover:-translate-y-1 transition ease-out delay-150":true
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
