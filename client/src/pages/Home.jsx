import { TypeAnimation } from 'react-type-animation'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default function Home() {
  SwiperCore.use([Navigation])
  return (
    <div>
      {/* Top image slider */}
      <Swiper navigation>
        <SwiperSlide>
          <div style={{ background: "url('https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center no-repeat", backgroundSize:'cover'}} className="h-[600px] w-full opacity-60 relative">
          </div>
          <TypeAnimation className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold uppercase text-4xl font-mono bg-slate-400 p-4 rounded-lg bg-opacity-60'
            sequence={[
              'We are experts in Carpenting',
              1000,
              'We are experts in Plumbing',
              1000,
              'We are experts in Drywalling',
              1000,
              'We are experts in Roofing',
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
          <p className='mb-10 text-slate-500'>Welcome to <span className='font-bold underline'>Pontes Building Contractors</span></p>
          <h1 className='mb-5'>
            A <span className='font-bold'>Company</span> that specializes in <span className='font-bold'>Construction and Repair</span> of all <span className='font-bold'>Housing Utilities</span> in Algarve.
          </h1>
            <p className='text-slate-700'>We are a <span className='font-bold'>professional company</span> fully dedicated to the world of <span className='font-bold'>construction, repair, reform and rehabilitation</span> of all housing utilities in Algarve.</p>
            <p className='text-slate-700'>We have been in the construction sector for more than <span className='font-bold'>30 years</span> and have been adequately trained to provide the <span className='font-bold'>best services in the most effective way</span> at an affordable price</p><br /><br />
            <p className='text-slate-700'>Please do not hesitate to contact us directly through our contact form and we will reply to your request promptly, or telephone us directly for an immediate response.</p>
        </div>
        <div style={{ background: "url('https://cdn.pixabay.com/photo/2017/08/03/21/37/construction-2578410_1280.jpg') center no-repeat"}} className="h-[500px] w-[500px] rounded-full invisible sm:visible m-20">
        </div>
      </div>
      <div className="w=full">
        <div style={{ background: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg') center no-repeat", backgroundSize:'cover'}} className="h-[300px] opacity-60 w-full"></div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div style={{ background: "url('https://cdn.pixabay.com/photo/2019/09/17/14/33/cement-4483692_1280.jpg') center no-repeat"}} className="h-[500px] w-[500px] rounded-lg invisible sm:visible m-20">
        </div>
        <div className="font-serif text-left max-w-screen-md text-xl m-20">
          <div className="bg-slate-300 p-10 rounded-lg">
            <h1 className='font-bold text-center uppercase underline'>Our services</h1>
            <ul className='list-disc mt-5'>
              <li>Plumbing - Installation and pipe repair</li>
              <li>Roofing - 100% weatherproof</li>
              <li>Bricklaying - walls, chimneys and other masonry</li>
              <li>Drywalling - Full interior</li>
              <li>Painting - Includes second coat</li>
              <li>Insulation</li>
              <li>Carpentry</li>
              <li>Tiling</li>
              <li>Ceiling fixer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer(legal, cookies) */}
    </div>
  )
}
