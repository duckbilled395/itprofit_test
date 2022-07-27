import React, {FC, useState} from 'react';
import {NameInput} from "../../shared/NameInput/NameInput";
// import './app.scss'
import {EmailInput} from "../../shared/EmailInput/EmailInput";
import {PhoneInput} from "../../shared/PhoneInput/PhoneInput";
import {DateInput} from "../../shared/DateInput/DateInput";
import {MessageInput} from "../../shared/MessageInput/MessageInput";

const Form: FC = () => {
    const [data, setData] = useState<object | null>(null)
    console.log(data)
    console.log('render app')
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    const [message, setMessage] = useState<string>('')

    return (
        <div className='wrapper'>
            <form className='form' onSubmit={() => setData(date)}>
                <NameInput name={name} setName={setName}/>
                <EmailInput email={email} setEmail={setEmail}/>
                <PhoneInput phone={phone} setPhone={setPhone}/>
                <DateInput date={date} setDate={setDate}/>
                <MessageInput message={message} setMessage={setMessage}/>
                <button className='btn' type='submit'>Register</button>
            </form>
        </div>
    );
};

export const RegisterForm = React.memo(Form);