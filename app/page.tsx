import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
const page = () => {
  return (
   <>
    <Header/>
    <div className="flex flex-col items-center min-h-screen justify-center bg-inherit">
      <h1 className="text-6xl font-bold text-center pb-6">Welcome to TriScan!</h1>
      <p className="text-xl text-center">This is a Free & Open Source Plagiarism-Checker Software.</p>
    </div>
    <Footer/>
   </>
  )
}

export default page