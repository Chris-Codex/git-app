import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import { MobileMenuLinks } from '../components/MobileMenuLinks';
import { RiGitRepositoryLine } from 'react-icons/ri'
import Header from '../components/Header';
import HeaderMobileMenu from '../components/HeaderMobileMenu';
import { ThemeContext } from '../context/ContextApi';
import { HiOutlineTag } from 'react-icons/hi'
import { GoMilestone } from 'react-icons/go'
import { AiOutlineBulb } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import List from '../components/List';
import Footer from '../components/Footer';


const Home = () => {
    const { showLinks, setShowLinks, toggleMobileView } = useContext(ThemeContext)

    return (
        <>
            <Navbar toggle={{ showLinks, setShowLinks, toggleMobileView }} />
            <MobileMenuLinks toggle={{ showLinks, setShowLinks, toggleMobileView }} />
            <div className='resource'>
                <RiGitRepositoryLine siize={30} color='#8e8e8e' />
                <div className='resource-fb'>facebook</div>/
                <div className='resource-fb'>react</div>
                <div className='resource-public'>Public</div>
            </div>
            <Header />
            <HeaderMobileMenu />
            <div className='home-thumbCrumb'>
                <div className='thumCrumbLeftSide'>
                    <div className='thumCrumbLeftSide-search'>
                        <FiSearch />
                        <input placeholder='is:pr is:open' className='thumCrumbLeftSide-input' />
                    </div>
                    <div className='thumbCrumb_btn1'>
                        <HiOutlineTag size={16} />
                        <p>Label</p>
                    </div>
                    <div className='thumbCrumb_btn1'><GoMilestone size={16} />&nbsp;Milestone</div>
                </div>
                <div className='thumCrumbRightSide'>New</div>
                <div className='thumCrumbRightSide-web'>New pull request</div>
            </div>

            <div className='search-mobile'>
                <FiSearch />&nbsp;
                <input placeholder='is:pr is:open' className='thumCrumbLeftSide-input' />
            </div>

            <List />
            <div className='sub-footer'>
                <AiOutlineBulb />&nbsp;<p>ProTip! Updated in the last three days</p>
            </div>
            <Footer />
            {/* <div className="overlay"></div> */}
        </>
    )
}

export default Home