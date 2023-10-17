import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { FiSearch } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { TbClock2 } from 'react-icons/tb'
import MobileNavbar from './MobileNavbar';


const Navbar = ({ toggle }) => {
    const { showLinks, setShowLinks, toggleMobileView } = toggle;

    return (
        <section className='top-header'>
            <div className='leftSide'>
                <AiFillGithub size={45} />
                <ul>
                    <li><a href="/">Product</a> <MdOutlineKeyboardArrowDown size={20} /></li>
                    <li><a href="/solutions">Solutions</a> <MdOutlineKeyboardArrowDown size={20} /></li>
                    <li><a href="source">Open Sources</a> <MdOutlineKeyboardArrowDown size={20} /></li>
                    <li><a href="/price">Pricing</a></li>
                </ul>
            </div>

            <div className='rightSide'>
                <div className='search'>
                    <div className='icon'><FiSearch size={16} /></div>
                    <div className='input-header'>
                        <input placeholder='Search or jump to...' className='search-input' />
                        <div className='search-clock'><TbClock2 size={20} color="#bababaa2" /></div>
                    </div>
                </div>

                <div className='auth'>
                    <p>Sign In</p>
                    <div className='signUp'>Sign Up</div>
                </div>
            </div>

            {/*Mobile*/}
            <MobileNavbar toggle={{ showLinks, setShowLinks, toggleMobileView }} />
        </section>
    )
}

export default Navbar;