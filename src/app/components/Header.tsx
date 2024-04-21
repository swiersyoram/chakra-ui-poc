"use client";
import React from "react";
import ColorModeToggle from "@/app/components/ColorModeToggle";
import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <div className={"py-5 flex justify-between"}>
      <div className={"flex items-center"}>
        <h1 className={"font-bold text-2xl mr-10"}>Some Company</h1>
        <div>
          <Link as={NextLink} href={"/"}>
            <Button variant={path === "/" ? "solid" : "ghost"}>Home</Button>
          </Link>
          <Link as={NextLink} href={"/dashboard"}>
            <Button variant={path === "/dashboard" ? "solid" : "ghost"}>
              Dashboard
            </Button>
          </Link>
          <Link as={NextLink} href={"/form"}>
            <Button variant={path === "/form" ? "solid" : "ghost"}>Form</Button>
          </Link>
        </div>
      </div>

      <ColorModeToggle />
    </div>
  );
};

export default Header;
