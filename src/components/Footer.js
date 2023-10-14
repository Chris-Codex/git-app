import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Status</li>
                    <li>Docs</li>
                    <li>Contact</li>
                    <li>Github</li>
                    <li className='webfooter-li'>Contact</li>
                    <li className='webfooter-li'>Pricing</li>
                    <li className='webfooter-li'>API</li>
                    <li className='webfooter-li'>Training</li>
                    <li className='webfooter-li'>Blog</li>
                    <li className='webfooter-li'>About</li>
                </ul>
            </div>
            <div className='copyright-footer1'>
                <BsGithub size={20} /> &nbsp; &copy; 2023 Github. Inc
            </div>

            <div className='web-footer'>
                <div className='footer1'>
                    <div className='copyright-footer'>
                        <BsGithub size={20} /> &nbsp; &copy; 2023 Github. Inc
                    </div>

                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Status</li>
                        <li>Docs</li>
                        <li>Contact</li>
                        <li>Github</li>
                        <li className='webfooter-li'>Contact</li>
                        <li className='webfooter-li'>Pricing</li>
                        <li className='webfooter-li'>API</li>
                        <li className='webfooter-li'>Training</li>
                        <li className='webfooter-li'>Blog</li>
                        <li className='webfooter-li'>About</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer