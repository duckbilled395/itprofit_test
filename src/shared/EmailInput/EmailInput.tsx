import React, {FC, FormEvent} from 'react';

type PropsType = {
    email: string,
    setEmail: (email: string) => void,
    emailDirty: boolean,
    emailError: string,
    blurHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
    emailHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
}

const Email: FC<PropsType> = ({email, setEmail, emailDirty, emailError,  blurHandler, emailHandler}) => {
    console.log('render email')
    return (
        <>
            {(emailDirty && emailError) && <div>{emailError}</div>}
            <input className='nameField' name='email'  value={email}
                   onBlur={e => blurHandler(e)}
                   onChange={(e) => emailHandler(e)}
                   type='text'
                   placeholder='Email'/>
        </>

    );
};

export const EmailInput = React.memo(Email);