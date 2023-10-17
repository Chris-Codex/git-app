import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import { MobileMenuLinks } from '../components/MobileMenuLinks';
import { RiGitRepositoryLine } from 'react-icons/ri'
import Header from '../components/Header';
import HeaderMobileMenu from '../components/HeaderMobileMenu';
import { ThemeContext } from '../context/ContextApi';
import { HiOutlineTag } from 'react-icons/hi'
import { GoMilestone } from 'react-icons/go'
import { AiOutlineBulb, AiOutlineStar } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { PiGitForkBold } from 'react-icons/pi'
import List from '../components/List';
import Footer from '../components/Footer';
import Loading from '../components/Loading';


const Home = () => {
    const { prList, showLinks, setShowLinks, toggleMobileView } = useContext(ThemeContext)


    return (
        <>
            <Navbar toggle={{ showLinks, setShowLinks, toggleMobileView }} />
            <MobileMenuLinks toggle={{ showLinks, setShowLinks, toggleMobileView }} />
            <div className='resource'>
                <div className='resource-leftSide'>
                    <RiGitRepositoryLine siize={30} color='#8e8e8e' />
                    <div className='resource-fb'>facebook</div>/
                    <div className='resource-fb'><span className='fb-react'>react</span></div>
                    <div className='resource-public'>Public</div>
                </div>

                <div className='resource-rightSide'>
                    <div className='resource-rightSide-btn1'>
                        <div><IoMdNotificationsOutline size={20} color="#999" /></div>&nbsp;
                        <div>Notifications</div>
                    </div>
                    <div className='resource-rightSide-btn1'>
                        <div><PiGitForkBold size={20} color="#999" /></div>&nbsp;
                        <div>Fork</div>&nbsp;
                        <div className='resource-border-btn'>45.3k</div>
                    </div>
                    <div className='resource-rightSide-btn1'>
                        <div><AiOutlineStar size={20} color="#999" /></div>&nbsp;
                        <div>Star</div>&nbsp;
                        <div className='resource-border-btn'>233k</div>
                    </div>
                </div>
            </div>
            <Header />
            <HeaderMobileMenu />

            {prList?.length > 0 ? (
                <>
                    <div className='home-thumbCrumb'>
                        <div className='thumCrumbLeftSide'>
                            <div className='thumCrumbLeftSide-search'>
                                <FiSearch />
                                <input placeholder='is:pr is:open' className='thumCrumbLeftSide-input' />
                            </div>
                            <div className='thumbCrumb_btn1'>
                                <HiOutlineTag size={16} />
                                <p>Labels</p>
                                <div className='thumbCrumb_btn1-count'>66</div>
                            </div>
                            <div className='thumbCrumb_btn2'>
                                <GoMilestone size={16} />&nbsp;
                                <p>Milestone</p>
                                <div className='thumbCrumb_btn2-count'>1</div>
                            </div>
                        </div>
                        <div className='thumCrumbRightSide'>New</div>
                        <div className='thumCrumbRightSide-web'>New pull request</div>
                    </div>

                    <div className='search-mobile'>
                        <FiSearch />&nbsp;
                        <input placeholder='is:pr is:open' className='thumCrumbLeftSide-input' />
                    </div>

                    <div className='list-section'>
                        <List />
                    </div>
                    <div className='sub-footer'>
                        <AiOutlineBulb />&nbsp;<p>ProTip! Updated in the last three days</p>
                    </div>
                    <div className='footer-divider'></div>
                    <Footer />
                </>
            ) : (<Loading />)}
            {/* <div className="overlay"></div> */}
        </>
    )
}

export default Home