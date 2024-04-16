import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"





const page = () => {
  return (
    <div>
        <div className="w-full border-b border-blue-950">
            <h1 className="text-xl font-bold text-blue-950">Applicant List</h1>
        </div>
        <div className="w-full border-b border-blue-950">
            <div>checkbox</div>
        </div>
        <Table>
          <TableHeader className='w-'>
            <TableRow className='text-blue-200'>
                <TableHead className='w-1/12'>checkbox</TableHead>
                <TableHead className='w-4/12'>Applicante Name</TableHead>
                <TableHead className='w-4/12'>Program</TableHead>
                <TableHead className='w-2/12'>status</TableHead>
                <TableHead className='w-1/12'>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Emmanuel</TableCell>
                <TableCell>Computer Science</TableCell>
                <TableCell>pending</TableCell>
                <TableCell>2010/2/10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}

export default page
