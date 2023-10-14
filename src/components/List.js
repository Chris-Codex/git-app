import React, { useContext, useState } from 'react'
import { DiGitPullRequest } from 'react-icons/di'
import { PiCheckThin } from 'react-icons/pi'
import { BiSolidDownArrow } from 'react-icons/bi'
import { DiGitCompare } from 'react-icons/di'
import { BsCheckLg } from 'react-icons/bs'
import Pagination from './Pagination'
import { ThemeContext } from '../context/ContextApi'
import Comments from './Comments'
import axios from 'axios'
import { BiMessage } from 'react-icons/bi'

const List = () => {
    const { prList } = useContext(ThemeContext)
    const [hello, setHello] = useState(0)
    console.log("RESPONSE", prList)


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
            {prList?.map((pr, index) => {
                return (
                    <div className='list-body-header' key={index}>
                        <div className='list-body-header-icon'>
                            <DiGitCompare size={20} color="#018339" />
                        </div>
                        <div className='list-body-header-text'>
                            <p>{pr.title}</p>
                            <div className='header-text-1'>
                                <p>suspends</p>
                                <BsCheckLg size={17} color="#018339" />
                            </div>&nbsp;
                            {pr.labels.map((label) => (
                                <>
                                    <div className='header-text-1'>
                                        {label.name === "CLA Signed" ? (
                                            <div className='header-sub-text-1'>{label.name}</div>
                                        ) : label.name === "React Core Team" ? (
                                            <div className='header-sub-text-2'>{label.name}</div>
                                        ) : ''}
                                    </div>
                                    <p className='para'>{label.description}</p>
                                </>
                            ))}
                        </div>
                        {/* {getCommentsNumber(pr.comments_url) && <div className='list-body-header-action'>
                            <BiMessage />
                            <p>{hello}</p>
                        </div>} */}
                        <Comments commentsUrl={pr.comments_url} />
                    </div>
                )
            })}
            <Pagination />
        </div>
    )
}

export default List