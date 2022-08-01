import React, {FC, FormEvent} from 'react';

type PropsType = {
    email: string,
    setEmail: (email: string) => void,
    emailDirty: boolean,
    emailError: string,
    blurHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
    emailOnChangeHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
}

const Email: FC<PropsType> = ({email, setEmail, emailDirty, emailError,  blurHandler, emailOnChangeHandler}) => {
    console.log('render email')
    return (
        <>
            {(emailDirty && emailError) && <div className='error'>{emailError}</div>}
            <input className='Field' name='email'  value={email}
                   onBlur={e => blurHandler(e)}
                   onChange={(e) => emailOnChangeHandler(e)}
                   type='text'
                   placeholder='Email'/>
        </>

    );
};

export const EmailInput = React.memo(Email);