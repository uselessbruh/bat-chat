import React from 'react';
import './chatOption.css';
import { auth } from "../../../../lib/firebase"
import { useChatStore } from "../../../../lib/chatStore";

const ChatOption = () => {

    const {  resetChat } = useChatStore();

    const handleLogout = () => {
        auth.signOut();
        resetChat()
    };

    return (
        <div className="ChatOption">
            <button className="signout" onClick={handleLogout}>SIGN OUT</button>
        </div>
    );
};

export default ChatOption;
