import React, { useContext, useEffect, useState } from 'react'
import { DiGitPullRequest } from 'react-icons/di'
import { PiCheckThin } from 'react-icons/pi'
import { BiSolidDownArrow } from 'react-icons/bi'
import { DiGitCompare } from 'react-icons/di'
import { BsCheckLg } from 'react-icons/bs'
import { ThemeContext } from '../context/ContextApi'
import Comments from './Comments'
import ReactPaginate from 'react-paginate';

const List = () => {
    const { prList } = useContext(ThemeContext)
    const [currentPage, setCurrentPage] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentPage(prList?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(prList?.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, prList])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % prList.length;
        setItemOffset(newOffset);
    };

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
            {currentPage?.map((pr) => {
                return (
                    <div className='list-body-header' key={pr.id}>
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
                                <div className='header-text-1' key={label.id}>
                                    {label.name === "CLA Signed" ? (
                                        <div className='header-sub-text-1'>{label.name}</div>
                                    ) : label.name === "React Core Team" ? (
                                        <div className='header-sub-text-2'>{label.name}</div>
                                    ) : ''}
                                </div>
                            ))}
                            <p className='list-p'>Author:&nbsp;{pr.user.login}</p>
                        </div>
                        <Comments commentsUrl={pr.comments_url} />
                    </div>
                )
            })}
            <div className='divider'></div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
                nextClassName='next'
            />
        </div>
    )
}

export default List