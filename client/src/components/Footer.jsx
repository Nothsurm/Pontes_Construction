import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function () {
  return (
    <div className='w-full bg-slate-800 lg:h-[200px] sm:h-[300px]'>
        <div className="flex flex-row justify-around flex-wrap">
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap flex-col text-center mt-10 max-w-36'>
                <span className='text-red-700 text-3xl uppercase'>Pontes</span>
                <span className='text-xs text-white'>Building</span>
                <span className='text-xs text-white'>Contractors</span>
            </h1>
            </Link>
            <div className="mt-10 flex flex-col text-white gap-5 max-w-36 items-center">
                <div className="flex flex-row gap-3 items-center">
                    <FaPhoneAlt /><p>927 493 253</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <MdEmail /><p>pontesbuildingcon@gmail.com</p>
                </div>
            </div>
            <div className="mt-10 flex flex-col flex-wrap items-center text-white gap-5 max-w-36">
                <a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-center text-center text-white">
            <p>Pontes Building Contractors. All Rights Reserved. 2024.</p>
        </div>
    </div>
  )
}
