import React from 'react'
function Card({item}) {
  return (
    <div>
         <div className="bg-orange-200 p-5 rounded-xl flex-1">
            <img src={item.src} alt="host-1" className="rounded-lg object-cover w-full"/>
            <h2 className="text-gray-700 text-xl font-medium mt-3">{item.title}</h2>
            <p className="text-sm md:text-base mt-2">
              {item.text}
            </p>
          </div>
    </div>
  )
}

export default Card