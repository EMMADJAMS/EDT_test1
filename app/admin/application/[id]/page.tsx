import CircularProgressBar from '@/components/CircularProgressBar'
import React from 'react'

const page = () => {
  return (
    <div className='h-full'>
      <div className="h-6/12 w-full flex p-3 border border-blue-950 rounded-2xl">
        <div className="p-3">
            <div className="w-full flex">
                <div className="border border-blue-950 h-6/12 w-1/2 flex items-center">Profile image</div>
                <div className="mx-5 w-full">
                    <ul className='flex justify-between'>
                        <li className="flex flex-col w-20">
                            <label htmlFor="">Name</label>
                            <label htmlFor="">Phone No</label>
                            <label htmlFor="">Email</label>
                        </li>
                        <li className="flex flex-col">
                            <span className="">: Emmanuel</span>
                            <span className="">: +60172445179</span>
                            <span className="">:djambemmanuel@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="flex ">
                <li className="flex flex-col">
                    <label htmlFor="">University</label>
                    <label htmlFor="">level</label>
                    <label htmlFor="">Program</label>
                    <label htmlFor="">Date</label>
                    <label htmlFor="">Status</label>
                </li>
                <li className="flex flex-col">        
                    <span className="">: Inti</span>
                    <span className="">: Master</span>
                    <span className="">: computer science</span>
                    <span className="">: 2010/2/10</span>
                    <span className="">: on progress</span>
                </li>
            </ul>
        </div>
        <div className="flex justify-center w-6/12">
            <CircularProgressBar/>
        </div>
      </div>
      <div className="h-6/12 w-full mt-3 flex p-3 border border-blue-950 rounded-2xl">
        <div className="p-3">
            <ul className="flex justify-between border-b border-blue-950">
                <li className="mx-5">Link up</li>
                <li className="mx-5">Document submission</li>
                <li className="mx-5">Document verification</li>
                <li className="mx-5">Payment</li>
                <li className="mx-5">Visa Process</li>
                <li className="mx-5">Accomodation</li>
            </ul>
            <form action="" className=" flex w-full h-full ">
                <div className="flex w-5/12">
                    <div className="w-full">
                        <div className="flex">
                            <label htmlFor="noticeType" className='flex justify-between w-full my-5'>Notice type <span>:</span></label>
                            <select name="noticeType" id="" className='border border-blue-950 w-full my-4'>
                                <option value="notice">Notice</option>
                                <option value="notice">Request</option>
                                <option value="notice">Send</option>
                            </select>
                        </div>
                        <div className="flex w-full">
                            <label htmlFor="noticeTile" className='flex justify-between w-full my-5'>Notice Title <span>:</span></label>
                            <input type="text" name="noticeTitle" id="" className='border border-blue-950 w-full my-5' />
                        </div>
                        <div className="flex w-full">
                            <label htmlFor="noticeTile" className='flex justify-between w-full my-5'>Status <span>:</span></label>
                            <select name="noticeType" id="" className='border border-blue-950 w-full my-5'>
                                <option value="notice">On Progress</option>
                                <option value="notice">Pending</option>
                                <option value="notice">Alert</option>
                            </select>
                        </div>
                        <div className="hidden">
                            <h1>Document</h1>
                        </div>
                        <div className="">
                            <textarea name="" 
                            id=""  placeholder='Write the notice' className='border border-blue-950 w-full'></textarea>
                        </div>
                    </div>
                </div>
                <div className="pl-5 w-7/12">
                    <div className="w-full h-9/12"></div>
                    <textarea name="" id=""  placeholder='write a report' className='border border-blue-950 w-full h-36'></textarea>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default page
