import React from 'react'

function Card({Icon , dataValue , Text}) {
  return (
    <div className='text-color4 text-[2.5rem] w-[22vh] h-[28vmin] bg-gradient-to-b from-white to-color6
    flex flex-col items-center border-color5 border-b-[10px] px-1 py-10 rounded-md'>
        <Icon/>
        <span className='font-semibold text-5xl my-5 text-color7'><data value={dataValue}></data>{dataValue}</span>
        <b className='font-light text-[20px] text-color8'>{Text}</b>
    </div>
  )
}

export default Card