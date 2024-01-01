import { useState } from 'react';
import { Parallax } from 'react-parallax';
import ImageParallax from '../img/parallax-img.jpg';
import images from '../components/images.js';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Services() {

  const [currentIndexStairs, setCurrentIndexStairs] = useState(0)
  const [currentIndexHouse, setCurrentIndexHouse] = useState(0)
  const [currentIndexGarden, setCurrentIndexGarden] = useState(0)

  const prevSlideStairs = () => {
    const isFirstSlide = currentIndexStairs === 0;
    const newIndex = isFirstSlide ? stairImages.length -1 : currentIndexStairs -1;
    setCurrentIndexStairs(newIndex)
  }
  
  const nextSlideStairs = () => {
    const isLastSlide = currentIndexStairs === stairImages.length -1;
    const newIndex = isLastSlide ? 0 : currentIndexStairs +1;
    setCurrentIndexStairs(newIndex)
  };

  const stairImages = [{
    image: `${images.stairOne}`
  },
  {
    image: `${images.stairTwo}`
  },
  {
    image: `${images.stairThree}`
  },
  {
    image: `${images.stairFour}`
  },
];

  const prevSlideHouse = () => {
    const isFirstSlide = currentIndexHouse === 0;
    const newIndex = isFirstSlide ? houseImages.length -1 : currentIndexHouse -1;
    setCurrentIndexHouse(newIndex)
  }
  
  const nextSlideHouse = () => {
    const isLastSlide = currentIndexHouse === houseImages.length -1;
    const newIndex = isLastSlide ? 0 : currentIndexHouse +1;
    setCurrentIndexHouse(newIndex)
  };

  const houseImages = [{
    image: `${images.houseOne}`
  },
  {
    image: `${images.houseTwo}`
  },
  {
    image: `${images.houseThree}`
  },
  {
    image: `${images.houseFour}`
  },
]
  const prevSlideGarden = () => {
    const isFirstSlide = currentIndexGarden === 0;
    const newIndex = isFirstSlide ? gardenImages.length -1 : currentIndexGarden -1;
    setCurrentIndexGarden(newIndex)
  }
  
  const nextSlideGarden = () => {
    const isLastSlide = currentIndexGarden === houseImages.length -1;
    const newIndex = isLastSlide ? 0 : currentIndexGarden +1;
    setCurrentIndexGarden(newIndex)
  };

  const gardenImages = [{
    image: `${images.gardenFour}`
  },
  {
    image: `${images.gardenTwo}`
  },
  {
    image: `${images.gardenThree}`
  },
  {
    image: `${images.gardenOne}`
  },
]
  return (
    <div>
      <Parallax bgImage={ImageParallax} bgImageAlt="background-img" strength={900}>
      <div className="mt-48">
          <div className="flex flex-row justify-center">
            <div className="flex flex-row flex-wrap justify-around max-w-10xl gap-3">
              <div className="relative">
                <img src={stairImages[currentIndexStairs].image} alt="stair images" className='h-[300px] w-[350px] rounded-lg duration-300 hover:scale-105'/>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlideStairs} size={30} className='text-slate-200  hover:opacity-80'/>
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlideStairs} size={30} className='text-slate-200 hover:opacity-80'/>
                </div>
              </div>
              <div className="bg-white rounded-lg px-10 py-3">
                <p className=''>Hellosagggggggggggggg</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20">
            <div className="flex flex-row flex-wrap justify-center max-w-8xl gap-3">
              <div className="bg-white rounded-lg px-10 py-3">
                <p className=''>Hellosagggggggggggggg</p>
              </div>
              <div className="relative">
                <img src={houseImages[currentIndexHouse].image} alt="house images" className='h-[300px] w-[350px] rounded-lg duration-300 hover:scale-105'/>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlideHouse} size={30} className='text-slate-200  hover:opacity-80'/>
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlideHouse} size={30} className='text-slate-200 hover:opacity-80'/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20">
            <div className="flex flex-row flex-wrap justify-center max-w-8xl gap-3">
              <div className="relative">
                <img src={gardenImages[currentIndexGarden].image} alt="garden images" className='h-[300px] w-[350px] rounded-lg duration-300 hover:scale-105'/>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlideGarden} size={30} className='text-slate-200  hover:opacity-80'/>
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlideGarden} size={30} className='text-slate-200 hover:opacity-80'/>
                </div>
              </div>
              <div className="bg-white rounded-lg px-10 py-3">
                <p className=''>Hellosagggggggggggggg</p>
              </div>           
            </div>
          </div>
        <div className="flex justify-center">
          <div className="w-1/2 text-center mt-32 font-bold font-sans text-4xl">
            <p>Interested in our Services?</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-slate-900 lg:w-1/2 h-[200px] sm:w-full flex flex-row justify-around flex-wrap items-center">
            <div className="text-center">
              <p className="text-white font-bold text-xl">Ask for a Quote!</p>
            </div>
            <div className="text-center flex justify-center">
              <Link to='/contact'>
                <button className="flex flex-row items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us <FaArrowRight /></button>
              </Link>
            </div>
          </div>
        </div>
          <div className="w=full mt-10 relative text-white">
            <div style={{ background: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg') center no-repeat", backgroundSize:'cover'}} className="h-[300px] opacity-60 w-full">

            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}
