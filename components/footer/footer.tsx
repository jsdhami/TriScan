import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <>
    <div className="footer footer-center  w-full p-4 bg-gray-100 text-gray-800">
      <div className="text-center">
        <p>
          Copyright © {new Date().getFullYear()}{" "}|
          <Link className="font-semibold" href="https://www.tcresearchgroup.edu.np"
            > Tri-Chandra Research Group</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default footer