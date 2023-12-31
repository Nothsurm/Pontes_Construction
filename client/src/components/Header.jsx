import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

  return (
    <header className={navbar ? 'fixed top-0 z-30 w-full bg-slate-200 transition-all duration-200' : 'fixed top-0 z-30 w-full transition-all duration-200'}>
        <div className='flex justify-around items-center h-[100px]'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap flex-col text-center'>
                    <span className='text-red-700 text-3xl uppercase'>Pontes</span>
                    <span className='text-xs'>Building</span>
                    <span className='text-xs'>Contractors</span>
                </h1>
            </Link>
            <ul className='flex gap-8 invisible md:visible flex-wrap flex-col md:flex-row lg:flex-row'>
                <Link to='/'>
                <li className='text-slate-900 hover:opacity-50 transition ease-in-out delay-50 cursor-pointer font-bold'>Home</li>
                </Link>
                <Link to='/services'>
                    <li className='text-slate-900 hover:opacity-50 transition ease-in-out delay-50 cursor-pointer font-bold'>Services</li>
                </Link>
                <Link to='/contact'>
                    <li className='text-slate-900 hover:opacity-50 transition ease-in-out delay-50 cursor-pointer font-bold'>Contact</li>
                </Link>
            </ul>
            <button 
                className='text-3xl md:hidden cursor:pointer relative w-8 h-8'
                onClick={() => setShowMenu(true)}>
                <div className="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 
                after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3"
                ></div>
            </button>
            {showMenu && ( 
                <section id='mobile-menu' className='absolute top-0 w-full bg-black text-5xl flex flex-col'>
                <button 
                    className='text-8xl self-end px-6 text-slate-400 hover:opacity-80'
                    onClick={() => setShowMenu(false)}>
                        &times;
                </button>
                <nav className='flex flex-col min-h-screen items-center py-8'>
                    <Link 
                        to='/' 
                        className='text-slate-400 w-full text-center py-6 hover:opacity-90'
                        onClick={() => setShowMenu(false)}>
                        Home
                    </Link>
                    <Link 
                        to='/services' 
                        className='text-slate-400 w-full text-center py-6 hover:opacity-90' 
                        onClick={() => setShowMenu(false)}>
                        Services
                    </Link>
                    <Link 
                        to='/contact' 
                        className='text-slate-400 w-full text-center py-6 hover:opacity-90' 
                        onClick={() => setShowMenu(false)}>
                        Contact
                    </Link>
                </nav>
            </section>
            )}
        </div>
    </header>
  )
}
