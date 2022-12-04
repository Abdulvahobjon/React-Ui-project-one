import React from 'react'
import Card from '../components/Card'
import Data from "../data/Data"
import Banner from "../images/hero_section_img.png"
import Episodes from '../data/Episodes'

const VisibilitySensor = require('react-visibility-sensor');
 
function onChange (isVisible) {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

function Home() {
  return (
    <div className="bg-zinc-900 text-gray-200 font-poppins">
     

        {/* home start */}
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-[1024px] w-[90%] mx-auto flex  items-center justify-center flex-col-reverse md:flex-row gap-10">
        <div className="flex-1  text-center md:text-left">
          <h1 className="text-4xl md:text-[60px] font-bold text-primary leading-tight uppercase">The Audio People</h1>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore esse unde
            sunt possimus minus aut
            voluptas asperiores </p>
          <a href="#" className="btn-primary">Start Listening</a>
        </div>
        <div className="flex-1 ">
          <div className="w-full h-[50vh] md:h-screen overflow-hidden relative">
            <img className="w-full h-full md:h-[150vh] object-contain md:absolute md:top-[-25%]"
              src={Banner} alt=""/>
          </div>
        </div>
      </div>
    </section>
        {/* home end */}

  
  {/* Hosts start */}
    <section className="min-h-screen flex items-center justify-center bg-orange-100 py-[100px] text-gray-700">
      <div className="max-w-[1024px] w-[90%] mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-primary text-4xl font-bold">The Hosts</h1>
          <p className="text-sm md:text-base text-gray-700 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae, illum
            beatae similique et cum</p>
        </div>
        <div className="flex gap-5 mt-11 md:flex-row flex-col ">
            {Data.map(item=>{
               return <Card key={item.id} item={item}/>
            })}
            {console.log()}
        </div>
      </div>
    </section>
    {/* Hosts end  */}
  
  
    <section className="flex items-center justify-center  py-[100px] ">
      <div className="max-w-[1024px] w-[90%] mx-auto">
        <h1 className="text-primary text-4xl font-bold text-center">Most listened <br/> Episodes</h1>
  
        <div className="mt-10 max-w-[100%] overflow-x-auto rounded-lg">
          <table className="w-fit bg-neutral-800 rounded-lg min-w-[600px] text-center mx-auto overflow-hidden">
            <thead>
              <tr className="bg-zinc-700">
                <th className="p-3">Guests</th>
                <th className="p-3">Date</th>
                <th className="p-3">Link</th>
              </tr>
            </thead>
            <tbody>
              {Episodes.map(item=>{
                return (
                    <tr key={item.id} className="border-b border-gray-500">
                        <td className="p-3">{item.title}</td>
                        <td className="p-3">{item.data}</td>
                        <td className="p-3">
                        <a href="#" className="btn-secondary">{item.listen}</a>
                        </td>
                    </tr>
                )
              })}
            
            </tbody>
          </table>
        </div>
      </div>
    </section>
  
    <section className="flex items-center justify-center  py-[100px] ">
      <div className="max-w-[800px] w-[90%] mx-auto">
        <div className="flex justify-between md:flex-row flex-col md:gap-5 gap-10">
          <div className="text-center">
            <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">50+</h1>
            <p className="text-xl">episodes</p>
          </div>
          <div className="text-center">
            <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">100+</h1>
            <p className="text-xl">hrs of talk</p>
          </div>
          <div className="text-center">
            <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">80+</h1>
            <p className="text-xl">guests</p>
          </div>
        </div>
      </div>
    </section>
  
    <section className="flex items-center justify-center  py-[100px] bg-cta-img bg-cover bg-center">
      <div className="max-w-[800px] w-[90%] mx-auto">
        <h1 className="text-4xl md:text-[80px] font-bold leading-tight uppercase">Don't miss the next episode</h1>
        <a href="#" className="btn-primary">Follow Now</a>
      </div>
    </section>
  
    <section className="flex items-center justify-center  py-[100px] ">
      <div className="max-w-[500px] w-[90%] mx-auto text-center">
        <h1 className="text-4xl md:text-[80px] font-extrabold text-primary leading-tight uppercase">The Audio People</h1>
        <p className="text-base md:text-lg text-gray-200  my-3 ">Lorem ipsum dolor sit amet
          consectetur
          adipisicing elit.
          Nulla error est dolores aut voluptatibus repellat,
          temporibus nostru </p>
      </div>
    </section>
  
  
   
  </div>
  )
}

export default Home