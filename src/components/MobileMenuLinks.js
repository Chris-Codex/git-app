import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { FiSearch } from 'react-icons/fi'
import { WiTime7 } from 'react-icons/wi'

export const MobileMenuLinks = ({ toggle }) => {
    const { showLinks, setShowLinks, toggleMobileView } = toggle;

    return (
        <>
            {!showLinks ? (
                <nav className='mobile-menu'>
                    <ul>
                        <li className='menu-li'>Product <MdOutlineArrowForwardIos className='icons' /></li>
                        <li className='menu-li'>Solutions <MdOutlineArrowForwardIos className='icons' /></li>
                        <li className='menu-li'>Open Source <MdOutlineArrowForwardIos className='icons' /></li>
                        <li className='menu-li'>Price </li>
                        <div className='mobileSearch'>
                            <div className='mobileSearch-form-header'>
                                <FiSearch size={20} />
                                <input className='form-search-icon-input' />
                                <div className='clock-icon'>
                                    <WiTime7 size={20} color="#999" />
                                </div>
                            </div>
                            <div className='signUp-btn'>Sign In</div>
                        </div>
                    </ul>
                </nav>
            ) : null}
        </>
    )
}
