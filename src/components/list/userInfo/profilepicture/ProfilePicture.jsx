import React from 'react';
import './profilePicture.css';
import { useUserStore } from "../../../../lib/userStore";

const UserProfilePicture = () => {

    const { currentUser } = useUserStore();

    return (
        <div className="UserProfilePicture">
            <img className="photo" src={currentUser?.avatar || "./avatar.png"} alt="" />
            <p>{currentUser.username}</p>
            <button>Change Photo</button>
            <button>Change Username</button>
        </div>
    );
};

export default UserProfilePicture;