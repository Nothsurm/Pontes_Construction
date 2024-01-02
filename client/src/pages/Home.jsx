import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ImageParallax from '../img/parallax-img.jpg';
import Van from '../img/van.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default function Home() {
  const quotes = [{
    quote: '"David did a wonderful job on our house refurbishment - he was resourceful, creative, hard working and provided excellent workmanship - no request was too much problem for him. Great job and will use them again." - Mark L'
  },
  {
    quote: '"David was very quick to respond to our enquiry and within 24 hours we had our existing original windows recalibrated and adjusted and working perfectly, with an order placed for additional matching units. Extremely happy to recommend." - Amy C'
  },
  {
    quote: '"We used Pontes Building Contractors for a kitchen remodel. The team were highly professional and managed a clean and tidy site. The work was faultless and we are extremely happy with the fantastic result. Would highly recommend." - Mike T'
  },
  {
    quote: '"I contacted Pontes Building Contractors for some long overdue garden work, David was very approchable and performed the job seamlessly. I will definitely be back in contact with them for any future work around my house." - Lee F'
  },
  {
    quote: '"David is a very hard worker, we had a big job on a kitchen unit that needed completing in 2 days, he completed the job within the time frame to a high standard. If you need a job doing promptly, Pontes Building Contractors is the way to go. - Dani W"'
  },
{

}];

const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? quotes.length -2 : currentIndex -1;
  setCurrentIndex(newIndex)
}

const nextSlide = () => {
  const isLastSlide = currentIndex === quotes.length -2;
  const newIndex = isLastSlide ? 0 : currentIndex +1;
  setCurrentIndex(newIndex)
};

  SwiperCore.use([Navigation])

  return (
    <div>
      <Parallax bgImage={ImageParallax} bgImageAlt="background-img" strength={900}>
      {/* Top image slider */}
      <Swiper navigation>
        <SwiperSlide>
          <div style={{ background: "url('https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center no-repeat", backgroundSize:'cover'}} className="h-[600px] w-full opacity-60 relative">
          </div>
          <TypeAnimation className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold uppercase text-4xl font-mono bg-slate-400 p-4 rounded-lg bg-opacity-60'
            sequence={[
              'We are experts in Roofing',
              1000,
              'We are experts in Guttering',
              1000,
              'We are experts in Brickwork',
              1000,
              'We are experts in Joinery',
              1000,
              'We are experts in Dry Stone Walling',
              1000,
              'We are experts in Painting',
              1000,
              'We are experts in Decorating',
              1000,
              'We are experts in Garden Maintenance',
              1000,
              'We are experts in Kitchen and Bathroom Tiling',
              1000,
            ]}
            speed={10}
            repeat={Infinity}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center no-repeat", backgroundSize:'cover'}} className="h-[600px] w-full opacity-60"></div>
          <TypeAnimation className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold uppercase text-4xl font-mono bg-slate-400 p-4 rounded-lg bg-opacity-60'
            sequence={[
              'Fully qualified and experienced professionals',
              2000,
              '',
            ]}
            speed={40}
            repeat={Infinity}
          />
        </SwiperSlide>
      </Swiper>
    
      {/* Information */}
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="font-serif text-left max-w-screen-md text-xl m-20">
          <p className='mb-10 text-slate-600'>Welcome to <span className='font-bold underline'>Pontes Building Contractors</span></p>
          <h1 className='mb-5'>
            A <span className='font-bold'>Company</span> that specializes in <span className='font-bold'>Construction and Repair</span> of all <span className='font-bold'>Housing Utilities</span> in Algarve.
          </h1>
            <p className='text-slate-700'>We are a <span className='font-bold'>professional company</span> fully dedicated to the world of <span className='font-bold'>construction, repair, reform and rehabilitation</span> of all housing utilities in Algarve.</p>
            <p className='text-slate-700'>We have been in the construction sector for more than <span className='font-bold'>30 years</span> and have been adequately trained to provide the <span className='font-bold'>best services in the most effective way</span> at an affordable price</p><br /><br />
            <p className='text-slate-700'>Please do not hesitate to contact us directly through our contact form and we will reply to your request promptly, or telephone us directly for an immediate response.</p>
          <div className="flex flex-row flex-wrap gap-14 mt-5">
            <div className='items-center mt-1'>
              <Link to='/contact'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Contact Us</button> 
              </Link>
            </div>
            <div className="flex flex-row gap-2 mt-1 items-center">
              <FaPhoneAlt /> <p>927 493 253</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <img src={Van} alt="image of work van" className='hidden md:block rounded-lg scale-75 hover:scale-90 transition duration-500'/>
        </div>
      </div>
      <div className="w=full mt-10">
        <div style={{ background: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg') center no-repeat", backgroundSize:'cover'}} className="h-[300px] opacity-60 w-full"></div>
      </div>
      <div className="flex flex-row justify-around m-16 gap-5 flex-wrap">
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
          <img src="https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/communication-in-construction-hero-2.webp" alt="construction workers" className='h=[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'/>
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className='text-md font-semibold text-slate-700'>We offer first-class communication, fair prices and realistic time frames. Our services are top industry standard and we perform all construction trades. We perform the job on time to your expectations.</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
          <img src="https://media.istockphoto.com/id/1170501978/pt/foto/bricklayer.jpg?s=612x612&w=0&k=20&c=pO2Pgpvztn0Nc-oXhQXGkg-MdeoPbrj3ppVZz9_NFI4=" alt="bricklaying" className='h=[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'/>
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className='text-lg font-bold text-slate-700'>Our services include:</p>
            <div className="flex flex-row flex-wrap gap-2">
              <p className='text-md font-semibold text-slate-700'>Brickwork</p>
              <p className='text-md font-semibold text-slate-400'>||</p>
              <p className='text-md font-semibold text-slate-700'>Roofing</p>
              <p className='text-md font-semibold text-slate-400'>||</p>
              <p className='text-md font-semibold text-slate-700'>Joinery</p>
              <p className='text-md font-semibold text-slate-400'>||</p>
              <p className='text-md font-semibold text-slate-700'>Painting</p>
              <p className='text-md font-semibold text-slate-400'>||</p>
              <p className='text-md font-semibold text-slate-700'>Tiling</p>
              <p className='text-md font-semibold text-slate-400'>||</p>
              <p className='text-md font-semibold text-slate-700'>Garden Maintenance</p>
              <p className='text-md font-semibold text-slate-400'>||</p>
              <p className='text-md font-semibold text-slate-700'>Dry Stone Walling</p>
              <p className='text-md font-semibold text-slate-400'>||</p>
              <p className='text-md font-semibold text-slate-700'>Guttering</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
          <img src="https://img.freepik.com/free-photo/happy-couple-shaking-hands-with-real-estate-agent-after-successful-agreement-office_637285-6889.jpg" alt="happy customer" className='h=[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'/>
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className='text-md font-semibold text-slate-700'>"We were looking for a builder who could do a bit of everything to refurbish our home, so we reached out to David, he was extremely professional and the finished job exceeded my expectations.</p>
            <p className='text-md font-bold text-slate-700'>- Mark</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl text-center text-white relative group">
          <div className="py-10 px-10 lg:h-[150px] sm:h-[300px] bg-slate-900 m-10 rounded-lg flex flex-col justify-center hover:opacity-90 transition duration-300">
            {quotes[currentIndex].quote}
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
      </Parallax>
    </div>
  )
}
