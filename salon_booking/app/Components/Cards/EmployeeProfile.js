import Image from 'next/image'
import React from 'react'

const EmployeeProfile = ({
    empImgSrc,
    empName,
    empExpertise
}) => {
  return (
    <div className='flex flex-col gap-2 text-black font-iRegular'>
        <Image
            src={empImgSrc}
            width={500}
            height={500}
            className='w-fit h-fit'
            alt='employee profile'
        />
        <p>{empName}</p>
        <p>{empExpertise}</p>
    </div>
  )
}

export default EmployeeProfile
