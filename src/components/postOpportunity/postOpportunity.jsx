import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostOpportunity = () => {
    // hooks 
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("../create-opportunity");
    };

    
    return(
    <div className="m-4 p-6 border border-secondary rounded-lg shadow-md bg-accent lg:flex flex-col hidden  ">
        <h2 className="text-2xl font-semibold mb-4 w-full text-center ">Want to Post a Research Opportunity?</h2>
        <div className="form-control items-center">
            <button
                onClick={handleHomeClick}
                className="btn btn-primary text-accent btn-md w-full lg:w-full  text-lg"
            >
                Post Opportunity
            </button>
        </div>
    </div>
    )
}
export default PostOpportunity