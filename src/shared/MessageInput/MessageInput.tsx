import React, {FC} from 'react';

type PropsType = {
    message: string,
    setMessage: (message: string) => void
}

const Message: FC<PropsType> = ({message, setMessage}) => {
    console.log('render message')
    return (
        <input className='nameField' name='message' value={message} onChange={(e) => setMessage(e.target.value)}
               type='text' placeholder='Message'/>
    );
};

export const MessageInput = React.memo(Message);