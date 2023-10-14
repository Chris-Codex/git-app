import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextApi'


const HeaderMobileMenu = () => {
    const { showHeaderLinks } = useContext(ThemeContext)

    return (
        <>
            {
                showHeaderLinks ? (
                    <div className='header-menu'>
                        <ul>
                            <li>Actions</li>
                            <li>Projects</li>
                            <li>Wiki</li>
                            <li>Security</li>
                            <li>Insigts</li>
                        </ul>
                    </div>
                ) : null
            }
        </>
    )
}

export default HeaderMobileMenu