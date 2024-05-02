import React from 'react'
import { skills, softskills } from '../data'
import { BsCheck2All } from 'react-icons/bs'

const Skills = () => {
  return (
    <div
    className='w-full flex flex-col py-20 '
    >
      <h4
      className='text-3xl font-bold text-black dark:text-white text-center mb-10'
      >Technical Skills
      </h4>
      <div
      className='w-full flex flex-wrap gap-10 items-center justify-center'
      >
        {
            skills.map((sk,index)=> (
                <div 
                data-aos="zoom-in-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                    key={index}
                    className='flex gap-4 shadow-lg py-2 px-6 bg-[#04133e]
                    rounded-full items-center hover:animate-bounce ease-in-out
                    duration-300 '
                    >
                    <div
                    className='w-10 h-10'
                    >
                        <img
                            src={sk.icon}
                            alt=""
                            className='w-full h-full rounded-full'
                            />
                    </div>
                    <div
                    className='flex flex-col gap-1'
                    >
                        <div
                        className='flex items-center justify-between'
                        >
                            <p
                            className='text-md font-semibold text-white'
                            >
                            {sk.name}
                            </p>
                            <p
                            className='text-md font-semibold text-white'
                            >
                            {sk.value + "%"}
                            </p>
                        </div>
                        <div
                        className='w-[200px] h-[10px] bg-slate-800 rounded-lg mb-1'
                        >
                            <div
                            className='bg-neutral-300 h-full rounded-lg'
                            style={{ width: sk.value + "%" }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
            <div
            className='mt-[10rem]'
            >
                {/* Header */}
                <h4
                className='text-3xl font-bold text-black dark:text-white mb-14 text-center'
                >
                    SoftSkill
                </h4>
                {/* Content-container */}
                <div
                className='flex flex-col md:flex-row gap-16 items-center justify-center'
                data-aos="zoom-in-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    {/* Content_1 */}
                    <div
                    className='flex flex-col text-white bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 cursor-pointer mb-10 md:mb-0'
                    >
                        {softskills.slice(0,4).map((soft,index)=>(
                            <div
                            
                            key={index + soft}
                            className='flex items-center gap-3 p-4'
                            >
                                <BsCheck2All color='white' size={22} />
                                <p>
                                {soft}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Content_2 */}
                    <div
                    className='flex flex-col scale-110 text-white bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 cursor-pointer mb-10 md:mb-0'
                    >
                        {softskills.slice(4,8).map((s,index)=>(
                            <div
                            key={index + s}
                            className='flex items-center gap-3 p-4'
                            >
                                <BsCheck2All color='white' size={22} />
                                <p>
                                {s}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Content_3 */}
                    <div
                    className='flex flex-col text-white  bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 cursor-pointer mb-10 md:mb-0'
                    >
                        {softskills.slice(8,12).map((s,index)=>(
                            <div
                            key={index + s}
                            className='flex items-center gap-3 p-4'
                            >
                                <BsCheck2All color='white' size={22} />
                                <p>
                                {s}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

    </div>
  )
}

export default Skills
