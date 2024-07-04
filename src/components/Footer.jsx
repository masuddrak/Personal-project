import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathName = usePathname();

  const isCurrentPath = (path) => pathName === path;

  return (
    <footer className="mt-10 border-t border-[#0cc8806d] ">
      <div className="text-center my-5 grid grid-cols-2 ">

        <h1 className="text-[#FFFFFF] text-[16px]  flex justify-start">
          &copy; 2024 Masud Rana. All rights reserved.
        </h1>
        <div className="col-span-1 flex justify-end">
          <ul className="text-[#FFFFFF] text-[16px] flex gap-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/contact"}>Contact</Link>
           
          </ul>
        </div>
      </div>
    </footer>
  );
}
