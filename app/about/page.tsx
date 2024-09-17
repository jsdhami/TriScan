import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col items-center min-h-screen justify-center bg-inherit">
        {/* about TriScan */}
            <h1 className="text-6xl font-bold text-center pb-6">About TriScan</h1>
            <p className="text-xl text-center">TriScan is a free and open-source plagiarism detection tool developed by Tri-Chandra Research Group. It helps you find and remove duplicate content from your research papers.</p>
      </div>
    <Footer/>
    </>
  )
}

export default page