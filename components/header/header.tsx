import React from 'react'
import Link from 'next/link'
import { GiLightningTrio } from "react-icons/gi";
import { auth } from "@/lib/auth/auth"
const header = async () => {
  const session = await auth()
  return (
    <>
      <div className="flex backdrop-blur-3xl bg-white/30 sm:px-60 px-5 border-b sm:pt-4 pt-4 pb-4 sticky top-0 z-30">
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
             <GiLightningTrio className='sm:translate-x-6 rounded-md h-10 w-10' />
          </Link>
        </div>

        <div className="flex-none">
          {session ? (
            <Link href="/dashboard" className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1">
              <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z" />
                </svg>
                <span>Dashboard</span>
              </span>
            </Link>
          ) : (
            <Link href="/signin" className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1">
              <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z" />
                </svg>
                <span>Sign In</span>
              </span>
            </Link>
          )}
        </div>
      </div>


    </>
  )
}

export default header