import React, {FC, FormEvent} from 'react';

type PropsType = {
    name: string,
    setName: (name: string) => void,
    nameDirty: boolean,
    nameError: string,
    blurHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
    nameOnChangeHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void,
}

const Name: FC<PropsType> = ({name, setName, nameDirty, nameError, blurHandler, nameOnChangeHandler}) => {
    console.log('render name')
    return (
        <>
            {(nameDirty && nameError) && <div className='error'>{nameError}</div>}
            <input className='Field' value={name} onBlur={e => blurHandler(e)}
                   onChange={e => nameOnChangeHandler(e)}
                   name='name' type='text'
                   placeholder='Name and surname'/>
        </>
    );
};

export const NameInput = React.memo(Name);
