import React, {FC} from 'react';

type PropsType = {
    email: string,
    setEmail: (email: string) => void
}

const Email: FC<PropsType> = ({email, setEmail}) => {
    console.log('render email')
    return (
        <input className='nameField' name='email' value={email} onChange={(e) => setEmail(e.target.value)} type='text'
               placeholder='Email'/>
    );
};

export const EmailInput = React.memo(Email);