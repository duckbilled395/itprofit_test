import React, {FC} from 'react';

type PropsType = {
    phone: string,
    setPhone: (phone: string) => void
}

const Phone: FC<PropsType> = ({phone, setPhone}) => {
    console.log('render phone')
    return (
        <input className='nameField' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} type='tel'
               placeholder='Phone'/>
    );
};

export const PhoneInput = React.memo(Phone);