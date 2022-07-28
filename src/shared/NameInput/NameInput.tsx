import React, {FC, FormEvent} from 'react';

type PropsType = {
    name: string,
    setName: (name: string) => void,
    nameDirty: boolean,
    nameError: string,
    blurHandler: (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => void
}

const Name: FC<PropsType> = ({name, setName, nameDirty, nameError, blurHandler}) => {
    console.log('render name')
    return (
        <>
            {(nameDirty && nameError) && <div>{nameError}</div>}
            <input className='nameField'  value={name} onBlur={e => blurHandler(e)}
                   onChange={(e) => setName(e.target.value)} name='name' type='text'
                   placeholder='Name and surname'/>
        </>
    );
};

export const NameInput = React.memo(Name);