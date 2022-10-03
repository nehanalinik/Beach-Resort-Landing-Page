import React,{useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url:"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        url:"https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        url:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length=sliderData.length;
    console.log(length)
    const prevSlide = () =>{
        setSlide(slide === length-1 ? 0 : slide + 1)
    }
    const nextSlide = () =>{
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white lg:text-slate-400 cursor-pointer left-8'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white lg:text-slate-400 cursor-pointer right-8'/>
        {sliderData.map((item, index)=>{
            return(
                <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                    {index === slide && <img className='w-full rounded-md' src={item.url} alt="/" />}
                </div>
            )
        })}
    </div>
  )
}

export default Carousel