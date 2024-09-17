import React from 'react'
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
const unauthorized = () => {
  return (
    <>
     <div className="min-h-screen flex justify-center items-center md:items-center p-6 bg-zinc-300">
      <Card className="w-full max-w-sm p-6 text-center flex flex-col justify-center items-center ">
            <CardHeader>
            <CardTitle className="text-2xl font-bold">OOPs !! 🚫</CardTitle>
            </CardHeader>
            <CardDescription className='mb-6'>
            You are not authorized to view this page.
            </CardDescription>

            <CardFooter>
                  <Button className="w-12/2"><Link href='/signin'>Sign In to See Dashboard </Link></Button>
            </CardFooter>
      </Card>
    </div>
    </>
  )
}

export default unauthorized