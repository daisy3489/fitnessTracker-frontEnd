import React, {useState} from 'react';
import { Redirect } from 'react-router';

export const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';

const CreateRoutine = ({token}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [willDeliver, setWillDeliver] = useState(false);

     //handle submit
     const submitHandler = async e => {
        e.preventDefault();

        //what we send to the server
        const fetchToken= async () => {
            const postInfo = await fetch(BASE_URL + '/routines', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: true
                  }
                })
            })

           //what we get back from server
           const content = await postInfo.json();

           console.log("content: ", content)

        //    const token = content.data.token

        //    console.log("token: ", token)
    
        }

        //call function
        fetchToken()
        //set redirect to true
        setRedirect(true);
  
    }
    //if true, redirect to posts page
    if (redirect) {
            // return <Redirect to="/posts" />;
    }

    return ( 
        <div className="createPost">
            <form onSubmit={submitHandler} >
                <div className="form-inner">
                    <h2>Add new Post</h2>
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" placeholder='post title' id="title" onChange={e => setTitle(e.target.value)} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" placeholder='describe item...' id="description" onChange={e => setDescription(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price: </label>
                        <input type="number" name="price"  id="price" onChange={e => setPrice(e.target.value)} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location: </label>
                        <input type="text" name="location" id="location" onChange={e => setLocation(e.target.value)}></input>
                    </div>
                    <input type="submit" value="SUBMIT"></input>
                </div>
            </form>
        </div>
     );
}
 
export default CreateRoutine;