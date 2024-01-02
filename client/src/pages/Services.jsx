import { useState } from 'react';
import { Parallax } from 'react-parallax';
import ImageParallax from '../img/parallax-img.jpg';
import images from '../components/images.js';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Services() {

  const [currentIndexStairs, setCurrentIndexStairs] = useState(0)
  const [currentIndexHouse, setCurrentIndexHouse] = useState(0)
  const [currentIndexGarden, setCurrentIndexGarden] = useState(0)

  console.log(images.gardenFive);

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
  {
    image: `${images.stairFive}`
  },
  {
    image: `${images.stairSix}`
  },
  {
    image: `${images.stairSeven}`
  },
  {
    image: `${images.stairEight}`
  },
  {
    image: `${images.stairNine}`
  },
  {
    image: `${images.stairTen}`
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
    const isLastSlide = currentIndexGarden === gardenImages.length -1;
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
  {
    image: `${images.gardenFive}`
  },
  {
    image: `${images.gardenSix}`
  },
  {
    image: `${images.gardenSeven}`
  },
  {
    image: `${images.gardenEight}`
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
              <div className="bg-white rounded-lg max-w-xl px-10 py-3 hover:bg-slate-100 transition duration-300 ease-in-out">
                <h1 className='text-center font-bold uppercase text-2xl py-4'>Basement Refurbishment</h1>
                <p className='text-center'>We performed a full basement refurbishment including installing drywalls and plastering duties, electrical appliances were fitted and walls painted and finished. Insulation and a door was also fitted and stairs fitted with carpet.</p>
                <p className='font-serif text-slate-700 text-sm py-5'>"We asked David to install a new carpet for our stairs and do the basement walls and painting, he finished the job promptly and it was exactly how I wanted it, would recommend"<span className='text-slate-900'> - Stacy R.</span></p>
                <div className="flex flex-row justify-center text-red-700">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20">
            <div className="flex flex-row flex-wrap-reverse justify-center max-w-8xl gap-3">
              <div className="bg-white rounded-lg max-w-xl px-10 py-3 hover:bg-slate-100 transition duration-300 ease-in-out">
                <h1 className='text-center font-bold uppercase text-2xl py-6'>Pointing Walls</h1>
                <p className='text-center'>We grinded the stone walls and pointed the full house, this includes cleaning the bricks and filling the cement holes.</p>
                <p className='font-serif text-slate-700 text-sm py-5'>"Our stone walls were overdue for some cleaning, I contacted Pontes Building Contractors and David was very polite, he arrived the following day and did an exemplary job"<span className='text-slate-900'> - Tim G.</span></p>
                <div className="flex flex-row justify-center text-red-700">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
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
              <div className="bg-white rounded-lg max-w-xl px-10 py-3 hover:bg-slate-100 transition duration-300 ease-in-out">
                <h1 className='text-center font-bold uppercase text-2xl py-6'>Garden Maintenance</h1>
                <p className='text-center'>We levelled the ground,constructed stairs, brickwork and laid the grass in a back garden</p>
                <p className='font-serif text-slate-700 text-sm py-5'>"Needed some back garden work doing, I contacted Pontes Building Contractors, the response was swift and service was top-notch. David is an excellent builder"<span className='text-slate-900'> - Paul V.</span></p>
                <div className="flex flex-row justify-center text-red-700">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>           
            </div>
          </div>
        <div className="flex justify-center">
          <div className="w-1/2 text-center mt-32 font-bold font-sans text-4xl">
            <p>Interested in our Services?</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-slate-900 lg:w-1/2 h-[200px] sm:w-full flex flex-row justify-around flex-wrap items-center p-2 rounded-md">
            <div className="text-center w-1/2">
              <p className="text-white font-bold text-xl">Ask for a Quote!</p>
            </div>
            <div className="text-center flex justify-center w-1/2">
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
