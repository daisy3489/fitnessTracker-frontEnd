import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

export const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';

const Routines = () => {
    const [routines, setRoutines] = useState([])

    console.log('list of routines:', routines)

    const fetchPost= async () => {
        //pass url as 1st property in fetch //optional second property. all different options you want to pass to it
        const response = await fetch(BASE_URL + '/routines')
        const data = await response.json()
        setRoutines(data.routines)
    }

    //function runs every time there is a rerender. once initially when component first loads and again whenever a change is made.
    useEffect(() => {
        fetchPost()
    }, [])

    //function to delete posts
    const handleDeleteRoutine = (id) => {
        const newRoutine = routines.filter(routine => routine._id !== id);
        setRoutines(newRoutine)

    }


    return (
        <div className='all-posts-container'>
        {/* DISPLAY POSTS */}
        {routines.map(routine => 
            <div className='all-posts-container' key={routine._id}>
                <div className='single-post-card'>  
                    <div className='header-info'>
                    <h2>{routine.title}</h2>
                    </div>
                    <p className="description" >Description: {routine.description} </p>
                    <p className="price"> Price: {routine.price} </p>
                    <p className='seller' > Seller: {routine.author.username} </p>
                    <p className='location'>  Location: {routine.location} </p>
                    <div className='postButtons'>
                        <button className='delete' onClick={() => handleDeleteRoutine(routine._id)} >Delete Routine</button>
                        <button className='message'><Link to="/leaveMessages">Leave a Message</Link></button>
                    </div>

                </div>
            </div>)}
        </div>
      );
}
 
export default Routines;