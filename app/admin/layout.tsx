'use client'
import NavBar from './component/Navbar'
import React from 'react'

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const styles = {
        backgroundColor: '#ebecf5',
        
      };
    return (
      <section className='bg-wite'>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav> <NavBar /></nav>
        <main className='w-full flex min-h-screen '>
            <div className="w-full mx-auto mt-2 lg:w-4/6  p-2 border  
            rounded-xl shadow-sm  
            border-blue-950 " >
              {children}
              </div>
        </main>
      </section>
    )
  }