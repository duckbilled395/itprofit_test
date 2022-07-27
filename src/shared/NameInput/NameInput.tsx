import React, {FC} from 'react';

type PropsType = {
    name: string,
    setName: (name: string) => void
}

const Name: FC<PropsType> = ({name, setName}) => {
    console.log('render name')
    return (
        <input className='nameField' value={name} onChange={(e) => setName(e.target.value)} name='name' type='text'
               placeholder='Name and surname'/>
    );
};

export const NameInput = React.memo(Name);