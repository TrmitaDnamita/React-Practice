import { useState } from "react"

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'Spooky night', body: "I saw someone outside my house and ....", author: 'SomeGuy', id:1 },
        {title: 'I got drunk last night', body: "I ended up in someone's backyard and ....", author: 'ThisGuy', id:2 },
        {title: "About SomeGuy's post", body: "You guys should see this ....", author: 'AnotherGuy', id:3 }
    ])
    
    return ( 
        <div className="Home">
            {
                blogs.map(
                    (blog) => (
                        <div className="BlogPreview" key={blog.id}>
                            <p>Posted by { blog.author }</p>
                            <h2>{ blog.title }</h2>
                            <h1>{ blog.body }</h1>
                        </div>
                    ) 
                )
            }
        </div>
     );
}
 
export default Home