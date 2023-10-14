import React, { useContext } from 'react'
import { PiCodeSimpleThin } from 'react-icons/pi'
import { LuCircleDot } from 'react-icons/lu'
import { DiGitPullRequest } from 'react-icons/di'
import { BsThreeDots } from 'react-icons/bs'
import { BsPlayCircle } from 'react-icons/bs'
import { PiNotebookDuotone } from 'react-icons/pi'
import { GoBook, GoGraph } from 'react-icons/go'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { ThemeContext } from '../context/ContextApi'



const Header = () => {
    const { toggleMobileHeader } = useContext(ThemeContext)

    return (
        <div className='header'>
            <div className='headerLeftSide'>
                <ul>
                    <li className='headerLeftSide-li'><PiCodeSimpleThin size={20} color='#8e8e8e' />Code</li>
                    <li className='headerLeftSide-li'>
                        <LuCircleDot size={20} color='#8e8e8e' />
                        Issues
                        <div className='headerLeftSide-li-count'>1.1k</div>
                    </li>
                    <li className='headerLeftSide-web-li'>
                        <DiGitPullRequest size={20} color='#8e8e8e' />
                        <p>Pull requests</p>
                        <div className='headerLeftSide-li-count'>386</div>
                    </li>
                    {/**/}
                    <li className='headerLeftSide-web-li'>
                        <BsPlayCircle size={20} color='#8e8e8e' />
                        <p>Actions</p>
                    </li>
                    <li className='headerLeftSide-web-li'>
                        <PiNotebookDuotone size={20} color='#8e8e8e' />
                        <p>Projects</p>
                    </li>
                    <li className='headerLeftSide-web-li'>
                        <GoBook size={20} color='#8e8e8e' />
                        <p>Wiki</p>
                    </li>
                    <li className='headerLeftSide-web-li'>
                        <AiOutlineSecurityScan size={20} color='#8e8e8e' />
                        <p>Security</p>
                    </li>
                    <li className='headerLeftSide-web-li'>
                        <GoGraph size={20} color='#8e8e8e' />
                        <p>Insights</p>
                    </li>
                </ul>
            </div>
            <div className='headerRightSide' onClick={toggleMobileHeader} >
                <BsThreeDots size={24} color='#414141' />
            </div>
        </div>
    )
}

export default Header
