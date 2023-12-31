import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Parallax } from 'react-parallax';
import ImageParallax from '../img/parallax-img.jpg';

export default function Contact() {

  return (
    <div>
      <Parallax bgImage={ImageParallax} bgImageAlt="background-img" strength={900}>
      <div className="mt-48 font-serif">
        <div className="flex flex-row flex-wrap w-full justify-center">
          <div className="lg:w-1/2 flex flex-wrap"> 
            <div className="flex flex-col gap-5 justify-center lg:ml-32 md:ml-18 sm:ml-4">
              <h1 className='text-4xl font-semibold'>Contact Us</h1>
              <p className='text-slate-800'>If you have any questions, please do not hesitate to get in contact with us by email, phone or simply fill in the form on the right.</p>
              <div className="mt-10 flex flex-col gap-5 max-w-64">
                <div className="flex flex-row gap-3 items-center">
                    <FaPhoneAlt className="text-red-700"/><p>927 493 253</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <MdEmail className="text-red-700"/><p clas>pontesbuildingcon@gmail.com</p>
                </div>
                <div className="flex flex-row gap-3 items-center mt-8">
                  <a href="https://www.facebook.com/" target="_blank"><FaFacebook className="text-3xl"/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-wrap">
            <div className="bg-slate-100 h-[500px] w-full rounded-lg m-10">
              <form className="flex flex-col px-4 py-4 gap-8">
                <div className="flex flex-col gap-1">
                  <label htmlFor="full-name">Full Name:</label>
                  <input type="text" placeholder='Enter your name here...' id='full-name' className="p-2 rounded-md" autoComplete='off'/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email:</label>
                  <input type="text" placeholder='Enter your e-mail here...' id='email' className="p-2 rounded-md" autoComplete='off'/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message">Message:</label>
                  <textarea placeholder='Enter your e-mail here...' id='message' className="p-2 rounded-md" autoComplete='off' rows='5'></textarea>
                </div>
                <div className="">
                  <button type='submit' className='bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'>Send Message</button> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10 flex justify-center">
        <iframe width="1072" height="517" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1072&amp;height=517&amp;hl=en&amp;q=avenida%20dos%20descobrimentos,%20vilamoura%20Faro+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.easybooking.eu/'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=185d6e6c5b101e3b0d39d8f2dfdc6291edee3327'></script>
        </div>
      </Parallax>
    </div>
  )
}
