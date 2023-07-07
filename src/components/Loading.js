import React from 'react'
import { BallTriangle } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex w-full h-screen bg-[#0D1017] items-center justify-center'>
        <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#DC143C"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
    </div>
  )
}

export default Loading