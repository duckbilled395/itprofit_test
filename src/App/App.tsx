import React, {FC} from 'react';
import './app.scss'
import {RegisterForm} from "../pages/RegisterForm/RegisterForm";

const App: FC = () => {

    console.log('render app')

    return (
        <>
            <div className='test'>123</div>
            <RegisterForm/>
        </>
    );
};

export default App;