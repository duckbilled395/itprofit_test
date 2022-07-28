import React, {FC, FormEvent} from 'react';

type PropsType = {
    phone: string,
    setPhone: (phone: string) => void,
    phoneDirty: boolean,
    phoneError: string,
    blurHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
    phoneHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>, phone: string) => void,
    phoneBackspaceKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>, phone: string) => void
}

const Phone: FC<PropsType> = ({phone, setPhone, phoneError, phoneDirty, blurHandler, phoneHandler, phoneBackspaceKeyDownHandler}) => {
    console.log('render phone')
    return (
        <>
            {(phoneDirty && phoneError) && <div>{phoneError}</div>}
            <input className='nameField' name='phone' value={phone} onChange={(e) => phoneHandler(e, phone)}
                   onBlur={e => blurHandler(e)} onKeyDown={e => phoneBackspaceKeyDownHandler(e, phone)} type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                   placeholder='Phone'/>
        </>

    );
};

export const PhoneInput = React.memo(Phone);