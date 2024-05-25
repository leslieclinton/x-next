"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";


export default function Sidebar() {
  const {data: session} = useSession()
  return (
    <div className="flex flex-col gap-5 p-3">
        <Link href='/'>
        <FaXTwitter className="h-12 w-12 p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-all duration-200 " />
        </Link>
        <Link href='/' className=" flex  items-center gap-2 p-2 hover:bg-gray-100 rounded-full w-fit
              transition-all duration-200">
                  <GoHomeFill className="h-7 w-7"/>
                  <span className=" font-bold hidden  xl:inline " >Home</span>
              </Link>
        {session? (
        <button className=" bg-blue-600  py-2 px-4 rounded-full text-white w-fit h-10 shadow-md  hidden xl:inline "onClick={()=> signOut()} > Sign out </button>
          ): (
            <button className=" bg-blue-600  py-2 px-4 rounded-full text-white w-fit h-10 shadow-md  hidden xl:inline "onClick={()=> signIn()} > Sign in </button>
          )}
      

    </div>
  )
}
