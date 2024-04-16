import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className=''>
      <div className="w-full">
        <h1 className="text-center font-bold text-xl">Create an University</h1>
      </div>
      <form action="" className="relative w-full h-full mt-10 ">
        <div className="flex ">
            <div className="mr-10">
                <div className="border border-blue-950 w-32 h-32"></div>
                <button type="button" className='bg-blue-950 text-white text-md mt-3 px-2 shadow'>upload logo</button>
            </div>
            <div className="mr-10 w-5/12">
                <div className="flex mb-5">
                    <label htmlFor="uniName" className="mr-3 flex w-1/3 justify-between">Name <span>:</span></label>
                    <input type="text" name="uniName" id="" className='border border-blue-950 w-full'/>
                </div>
                <div className="flex mb-5">
                    <label htmlFor="uniName" className="mr-3 flex w-1/3 justify-between">city<span>:</span></label>
                    <input type="text" name="city" id="" className='border border-blue-950 w-full'/>
                </div>
                <div className="flex mb-5">
                    <label htmlFor="UniPhoneNumber" className="mr-3 flex w-1/3 justify-between">Phone No<span>:</span></label>
                    <input type="text" name="UniPhoneNumber" className='border border-blue-950 w-full'/>
                </div>
                <div className="flex mb-5">
                    <label htmlFor="unEmail" className="mr-3 flex w-1/3 justify-between">Email <span>:</span></label>
                    <input type="text" name="uniEmail" id="" className='border border-blue-950 w-full'/>
                </div>
            </div>
            <div className="w-5/12">
                <div className="flex mb-5">
                    <label htmlFor="uniName" className="mr-3 flex w-1/5 justify-between">website<span>:</span></label>
                    <input type="text" name="uniwebsite" id="" className='border border-blue-950 w-full'/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="UniPhoneNumber" className="mr-3 flex w-1/2 justify-between">Address:</label>
                    <textarea name="uniAddress" id=""  className='border border-blue-950 w-full h-28'></textarea>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col ">
            <div className="w-full flex h-[200px] mb-8">
                <div className="flex flex-col mr-10 w-1/2 ">
                    <label htmlFor="description">Description</label>
                    <textarea name="" id=""  className="h-full border border-black"></textarea>
                </div>
                <div className="flex flex-col w-1/2 ">
                    <label htmlFor="description">Key info</label>
                    <textarea name="" id=""  className="h-full border border-black"></textarea>
                </div>
            </div>
            <div className="w-full flex mb-24">
                <ul className="w-4/12">
                    <h1 className="text-lg font">Strength and advantages</h1>
                    <li>
                        <button className='bg-blue-950 rounded shadow p-1'>
                            <Image src={'/Plus-icon.svg'} alt={''} width={15} height={15}/>
                        </button>
                    </li>
                </ul>
                <ul className="w-4/12">
                    <h1 className="text-lg font">video</h1>
                    <li>
                        <button className='bg-blue-950 rounded shadow p-1'>
                            <Image src={'/Plus-icon.svg'} alt={''} width={15} height={15}/>
                        </button>
                    </li>
                </ul>
                <ul className="w-4/12">
                    <h1 className="text-lg font">photo</h1>
                    <li>
                        <button className='bg-blue-950 rounded shadow p-1'>
                            <Image src={'/Plus-icon.svg'} alt={''} width={15} height={15}/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="absolute bottom-0 right-20">
            <button type="reset" className='m-5 p-2 border border-blue-950 rounded-xl  '>Reset</button>
            <button type="submit" className='m-5 p-2 text-white rounded-xl  bg-blue-950'>Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default page
