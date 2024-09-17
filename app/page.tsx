import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { Button } from '@/components/ui/button'
const page = () => {
  return (
   <>
    <Header/>
    <div className="flex flex-col items-center min-h-screen justify-center bg-inherit">
      <h1 className="text-6xl font-bold text-center pb-6">Welcome to TriScan!</h1>
      <p className="text-xl text-center">This is a Free & Open Source Plagiarism-Checker Software.</p>
      <div className="flex items-center justify-center gap-4">
        <Button className="mt-8">Get Started</Button>
        <Button className="mt-8">Donate Now</Button>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default page