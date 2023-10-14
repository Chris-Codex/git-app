import React from 'react'
import { DiGitPullRequest } from 'react-icons/di'
import { PiCheckThin } from 'react-icons/pi'
import { BiSolidDownArrow, BiMessage } from 'react-icons/bi'
import { DiGitCompare } from 'react-icons/di'
import { BsCheckLg } from 'react-icons/bs'
import Pagination from './Pagination'

const List = () => {
    return (
        <div className='list-header'>
            <div className='list-top-title'>
                <DiGitPullRequest size={20} />
                <h4>385</h4>
                <h4>Open</h4>
                <PiCheckThin />
                <p>13,591</p>
                <p>Closed</p>
            </div>

            <div className='list-table-header'>
                <p>Author</p>
                <p>Label</p>
                <p>Assignee</p>
                <p>Sort</p>
            </div>

            {/*Web*/}
            <div className='list-header-web'>
                <div className='header-title'>
                    <div className='list-top-web-title'>
                        <DiGitPullRequest size={20} />
                        <h4>385</h4>
                        <h4>Open</h4>
                        <PiCheckThin />
                        <p>13,591</p>
                        <p>Closed</p>
                    </div>
                </div>

                <div className='header-links'>
                    <div className='list-table-web-header'>
                        <p>Author&nbsp;<BiSolidDownArrow className='header-links-icon' /></p>
                        <p>Label&nbsp;<BiSolidDownArrow className='header-links-icon' /></p>
                        <p>Projects&nbsp;<BiSolidDownArrow className='header-links-icon' /></p>
                        <p>Milestones&nbsp;<BiSolidDownArrow className='header-links-icon' /></p>
                        <p>Assignee&nbsp;<BiSolidDownArrow className='header-links-icon' /></p>
                        <p>Sort&nbsp;<BiSolidDownArrow className='header-links-icon' /></p>
                    </div>
                </div>
            </div>

            {/*RENDER*/}
            <div className='list-body-header'>
                <div className='list-body-header-icon'>
                    <DiGitCompare size={20} color="#018339" />
                </div>
                <div className='list-body-header-text'>
                    <p>Prerendering support for useDefferedValue</p>
                    <div className='header-text-1'>
                        <p>suspends</p>
                        <BsCheckLg size={17} color="#018339" />
                    </div>&nbsp;
                    <div className='header-text-1'>
                        <div className='header-sub-text-1'>CLA Signed</div>
                        <div className='header-sub-text-2'>React Core Team</div>
                    </div>
                    <p className='para'>#2749 opened yesterday by chris</p>
                </div>
                <div className='list-body-header-action'>
                    <BiMessage />
                    <p>1</p>
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default List