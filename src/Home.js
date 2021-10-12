import { useState } from "react";
// import Posts from "./Posts";

const Home = () => {

    const [posts, setPosts] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const adminUser = {
        name: 'admin',
        email: 'admin@example.com',
        password: 'password'
    }
    
    return ( 
        <div className="home">
           {posts.map((post) => (
               <div className="post-preview" key={post.id}>
                   <h2>{post.title}</h2>
                   <p>Written by {post.author}</p>
               </div>
           ))} 
           
        </div>
    );
}
 
export default Home;