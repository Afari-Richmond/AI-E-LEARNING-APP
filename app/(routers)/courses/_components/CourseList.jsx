import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CourseList = () => {
  return (
    <div className='p-5 bg-white rounded-lg mt-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[20px] font-bold text-cyan-600'>All Courses</h2>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CourseList;
