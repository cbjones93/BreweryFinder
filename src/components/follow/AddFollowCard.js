import React from 'react';

export const AddFollowCard = ({user}) => {
   
    return (
        <div className="follow-card">
            <div className="card-content">
                <h3>
                    <span className="userCardName">{user.name}</span>
                    <p className="userCardName">{user.email}</p>
                </h3>
            </div>
        </div>
    
    )
}