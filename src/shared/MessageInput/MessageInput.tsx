import React, {FC, FormEvent} from 'react';

type PropsType = {
    message: string,
    messageDirty: boolean,
    messageError: string,
    blurHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLTextAreaElement>) => void,
    messageOnChangeHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLTextAreaElement>) => void,
}

const Message: FC<PropsType> = ({message, messageError, messageDirty, messageOnChangeHandler, blurHandler}) => {
    console.log('render message')
    return (
        <>
            {(messageDirty && messageError) && <div className='error'>{messageError}</div>}
            <textarea className='Field' name='message' value={message} onChange={(e) => messageOnChangeHandler(e)}
                      onBlur={e => blurHandler(e)}
                      placeholder='Message'/>
        </>

    );
};

export const MessageInput = React.memo(Message);