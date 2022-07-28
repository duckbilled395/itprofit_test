import React, {FC, FormEvent, useState} from 'react';

import {NameInput} from "../../shared/NameInput/NameInput";
import {EmailInput} from "../../shared/EmailInput/EmailInput";
import {PhoneInput} from "../../shared/PhoneInput/PhoneInput";
import {DateInput} from "../../shared/DateInput/DateInput";
import {MessageInput} from "../../shared/MessageInput/MessageInput";

const Form: FC = () => {
    const [data, setData] = useState<object | null>(null);
    console.log('render app')
    const [name, setName] = useState<string>('');
    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string>('Wrong name');

    const [email, setEmail] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('Enter your email');

    const [phone, setPhone] = useState<string>('+8');
    const [phoneDirty, setPhoneDirty] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<string>('Wrong phone');

    const [date, setDate] = useState<Date>(new Date());
    const [message, setMessage] = useState<string>('');

    const blurHandler = React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        switch (target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
        }
    }, [])

    const nameHandler = () => {

    }

    const emailHandler = React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setEmail(target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(target.value).toLowerCase())) {
            setEmailError('Email is incorrect')
        } else {
            setEmailError('')
        }
    }, [])

    const phoneHandler =  React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>, phone: string) => {
        const target = e.target as HTMLInputElement
        const re = /[^\d\+]/g
        if (!re.test(target.value ) && target.value.length < 12) {
            setPhone(target.value)
        } else {
            setPhone(target.value)
            setPhoneError('')
        }
    }, [])

    const phoneBackspaceKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>, phone: string) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Backspace' && phone.length === 12) {
            e.preventDefault()
            setPhone(phone.substring(0, 11))
            setPhoneError('Wrong phone')
        }
    }

    const messageHandler = () => {

    }

    // handleOnSubmit, setting all data in each local state and common state
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>, name: string, email: string, phone: string, date: Date, message: string) => {
        e.preventDefault();

        setName(name);
        setEmail(email);
        setPhone(phone);
        setDate(date);
        setMessage(message);
        setData({name: name, email, phone, date, message})
        console.log(data)
    }

    return (
        <div className='wrapper'>
            <form className='form' onSubmit={(e) => handleOnSubmit(e, name, email, phone, date, message)} noValidate>
                <NameInput name={name} setName={setName} nameDirty={nameDirty} nameError={nameError}
                           blurHandler={blurHandler}/>
                <EmailInput email={email} setEmail={setEmail} emailDirty={emailDirty} emailError={emailError}
                            blurHandler={blurHandler} emailHandler={emailHandler}/>
                <PhoneInput phone={phone} setPhone={setPhone} phoneError={phoneError} blurHandler={blurHandler}
                            phoneDirty={phoneDirty} phoneHandler={phoneHandler} phoneBackspaceKeyDownHandler={phoneBackspaceKeyDownHandler}/>
                <DateInput date={date} setDate={setDate}/>
                <MessageInput message={message} setMessage={setMessage}/>
                <button className='btn' type='submit'>Register</button>
            </form>
        </div>
    );
};

export const RegisterForm = React.memo(Form);