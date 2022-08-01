import React, {FC, FormEvent} from 'react';

type PropsType = {
    phone: string,
    phoneDirty: boolean,
    phoneError: string,
    blurHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
    phoneOnChangeHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
    phoneBackspaceKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>, phone: string) => void
}

const Phone: FC<PropsType> = ({phone, phoneError, phoneDirty, blurHandler, phoneOnChangeHandler, phoneBackspaceKeyDownHandler}) => {
    console.log('render phone')
    return (
        <>
            {(phoneDirty && phoneError) && <div className='error'>{phoneError}</div>}
            <input className='Field' name='phone' value={phone} onChange={(e) => phoneOnChangeHandler(e)}
                   onBlur={e => blurHandler(e)} onKeyDown={e => phoneBackspaceKeyDownHandler(e, phone)} type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                   placeholder='Phone'/>
        </>

    );
};

export const PhoneInput = React.memo(Phone);