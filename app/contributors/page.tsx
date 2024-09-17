import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col items-center min-h-screen justify-center bg-inherit mb-6">
        {/* all about contributors details */}
              <div className="">
                  <h1 className="text-2xl font-bold text-center p-2 m-5">Developers</h1>
                  <div className="h-6 w-full bg-gray-100 mb-5 "></div>
                  <div className="flex flex-wrap justify-center items-center gap-4">

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  

              </div>
            </div>

            <div className="">
                  <h1 className="text-2xl font-bold text-center p-2 m-5">UX/UI Designers</h1>
                  <div className="h-6 w-full bg-gray-100 mb-5 "></div>
                  <div className="flex flex-wrap justify-center items-center gap-4">

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  <div className="bg-white w-90 p-8 flex justify-center items-center flex-col rounded-lg shadow-sm ring-1 text-center">
                        <Image src="/placeholder-user.jpg" alt="Janak Singh Dhami" width={200} height={200} className="rounded-xl border-2 mb-5"/>
                        <h2 className="text-xl font-bold">Janak Singh Dhami</h2>
                        <p className="text-md">FullStack Developer</p>
                  </div>

                  

              </div>
            </div>
      </div>

    <Footer/>
    </>
  )
}

export default page