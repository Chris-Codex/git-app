import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineClose } from "react-icons/ai"

const MobileNavbar = ({ toggle }) => {
    const { showLinks, toggleMobileView } = toggle;

    return (
        <>
            <div className='mobile-navWrapper'>
                <div className='mobile-header'>
                    <div className='mleftSide'>
                        <div className='mleftBtn'>Sign Up</div>
                    </div>
                    <div className='mCenter'>
                        <AiFillGithub size={45} />
                    </div>
                    {showLinks ? (
                        <div className='mRightSide' onClick={toggleMobileView}>
                            <AiOutlineClose size={35} />
                        </div>
                    ) : (
                        <div className='mRightSide' onClick={toggleMobileView}>
                            <GiHamburgerMenu size={35} />
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}

export default MobileNavbar;