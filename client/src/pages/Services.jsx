import { Parallax } from 'react-parallax';
import ImageParallax from '../img/parallax-img.jpg';
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <Parallax bgImage={ImageParallax} bgImageAlt="background-img" strength={900}>
      <div className="mt-48">
          <div className="flex flex-row justify-center">
            <div className="flex flex-row flex-wrap justify-center max-w-8xl gap-3">
              <img src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-[300px] rounded-lg'/>
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
              <img src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-[300px] rounded-lg'/>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20">
            <div className="flex flex-row flex-wrap justify-center max-w-8xl gap-3">
              <img src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-[300px] rounded-lg'/>
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
          <div className="w=full mt-10">
            <div style={{ background: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg') center no-repeat", backgroundSize:'cover'}} className="h-[300px] opacity-60 w-full"></div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}
