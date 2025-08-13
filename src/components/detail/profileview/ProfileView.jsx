import React from 'react';
import './profileView.css';
import { useChatStore } from '../../../lib/chatStore';


const userProfileView = () => {

    const { user }  = useChatStore();
  return (
    <div className="userProfileView">
      <img src={user?.avatar}/>
      <p>{user?.username}</p>
    </div>
  );
};

export default userProfileView;