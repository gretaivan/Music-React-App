import React, { useState } from 'react'; 

const likeBtn = () => {
    const [like, setLike] = useState(true); 

    const handleLike = e => {  
        setLike(prevState => !prevState)
        console.log(like)
        if(like){
            e.target.setAttribute("class", "liked")
        } else {
            e.target.removeAttribute("class");
        }
        
        
    }


    return (
    <>
        <span onClick={handleLike}>&#10084;</span>
    </>
    )
};

export default likeBtn;

