import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiMessage } from 'react-icons/bi'


const Comments = ({ commentsUrl }) => {
    const [numberOfComments, setNumberOfComments] = useState()

    useEffect(() => {
        const getCommentsNumber = async () => {
            try {
                const response = await axios.get(commentsUrl)
                setNumberOfComments(response.data.length)
            } catch (error) {
                console.error('Error Fetching Comments:', error)
            }
        }

        getCommentsNumber();
    }, [commentsUrl])






    return (
        <div className='list-body-header-action'>
            <BiMessage />
            <p>{numberOfComments}</p>
        </div>
    )
}

export default Comments