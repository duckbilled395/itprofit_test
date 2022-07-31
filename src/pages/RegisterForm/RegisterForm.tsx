import React, {FC, FormEvent, useEffect, useRef, useState} from 'react';

import {NameInput} from "../../shared/NameInput/NameInput";
import {EmailInput} from "../../shared/EmailInput/EmailInput";
import {PhoneInput} from "../../shared/PhoneInput/PhoneInput";
import {DateInput} from "../../shared/DateInput/DateInput";
import {MessageInput} from "../../shared/MessageInput/MessageInput";

const Form: FC = () => {
    const fromEl = useRef<HTMLFormElement | null>(null)
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
    const [messageDirty, setMessageDirty] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('The message is too short or long');

    const [data, setData] = useState<object | null>(null);
    const [isDataCorrect, setIsDataCorrect] = useState<boolean>(false);
    const [dataError, setDataError] = useState<string>('');


    const blurHandler = React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
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
            case 'message':
                setMessageDirty(true)
        }
    }, [])

    const nameOnChangeHandler = React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setName(target.value)

        const re = /[a-zA-Z]/g;
        if (!re.test(String(target.value).toLowerCase()) || target.value === ' ') {
            setName('')
            setNameError('Name should consist of only letters')
        } else {
            // Validation for min/max length of 1 word ~~~~~~~~~~~~~
            if (target.value.split(' ')[0].length < 3 || target.value.split(' ')[0].length > 30) {
                setNameError('Wrong first name')
                // Validation request for second word
            } else if ((target.value.split(' ')[0].length >= 3 ||
                    target.value.split(' ')[0].length <= 30) &&
                !(target.value.substring(target.value.split(' ')[0].length, target.value.split(' ')[0].length + 1) === ' ')) {
                setNameError('Enter surname')


                // Validation for min/max length of 2 word ~~~~~~~~~~~
            } else if ((typeof target.value.split(' ')[1] !== 'undefined' && target.value.split(' ')[1].length < 3) ||
                (typeof target.value.split(' ')[1] !== 'undefined' && target.value.split(' ')[1].length > 30)) {
                setNameError('Wrong last name')
            } else if (typeof target.value.split(' ')[1] !== 'undefined' &&
                target.value.split(' ')[1].length >= 3 &&
                target.value.split(' ')[1].length <= 30 &&
                target.value.split(' ')[2] === undefined
            ) {
                setNameError('')
            }
            // Validation for second ' '
            else if (typeof target.value.split(' ')[2] !== 'undefined') {
                setNameError('You should enter only name and surname')
                setName(target.value.slice(0, -1))
            }
        }
    }, [])

    const emailOnChangeHandler = React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setEmail(target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(target.value).toLowerCase())) {
            setEmailError('Email is incorrect')
        } else {
            setEmailError('')
        }
    }, [])

    const phoneOnChangeHandler = React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        const re = /[^\d\+]/g
        if (!re.test(target.value) && target.value.length < 12 && target.value.length > 2) {
            setPhone(target.value)
        } else if (target.value.length <= 2) {
            setPhone('+8')
        } else if (target.value.length === 12) {
            setPhone(target.value)
            setPhoneError('')
        }
    }, [])

    const phoneBackspaceKeyDownHandler = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>, phone: string) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Backspace' && phone.length === 12) {
            e.preventDefault()
            setPhone(phone.substring(0, 11))
            setPhoneError('Wrong phone')
        }
    }, [])

    const messageOnChangeHandler = React.useCallback((e: FormEvent<HTMLFormElement> | FormEvent<HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement
        setMessage(target.value)
        if (target.value.length < 10 || target.value.length > 100) {
            setMessageError('Message is incorrect')
        } else {
            setMessageError('')
        }
    }, [])

    const setAllData = async (name: string, email: string, phone: string, date: Date, message: string) => {
        await setData({name, email, phone, dayYear: date, message})
        console.log(data)
    }

    // handleOnSubmit, setting all data in each local state and common state
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            phone: { value: string };
            message: { value: string };
            date: { value: string };
        };
        if (nameError === '' && emailError === '' && phoneError === '' && messageError === '') {
            setIsDataCorrect(true)
            setDataError('Data is correct')
            const resData = {
                name: target.name.value,
                email: target.email.value,
                phone: target.phone.value,
                date: target.date.value,
                message: target.message.value,
            }
            fetch('http://localhost:8080/qwe', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resData)
            })
                .then(res => res.json())
                .then(res => {
                    alert(res.status)
                })
                .catch(err => {
                    console.log('err', err)
                })
        } else {
            setIsDataCorrect(false)
            setDataError('Data isnt correct')
        }
    }


    return (
        <div className='wrapper'>

            <form className='form' id='form'
                  onSubmit={handleOnSubmit}
                  noValidate>
                <NameInput name={name} setName={setName} nameDirty={nameDirty} nameError={nameError}
                           blurHandler={blurHandler} nameOnChangeHandler={nameOnChangeHandler}/>
                <EmailInput email={email} setEmail={setEmail} emailDirty={emailDirty} emailError={emailError}
                            blurHandler={blurHandler} emailOnChangeHandler={emailOnChangeHandler}/>
                <PhoneInput phone={phone} phoneError={phoneError} blurHandler={blurHandler}
                            phoneDirty={phoneDirty} phoneOnChangeHandler={phoneOnChangeHandler}
                            phoneBackspaceKeyDownHandler={phoneBackspaceKeyDownHandler}/>
                <DateInput date={date} setDate={setDate}/>
                <MessageInput message={message} messageError={messageError}
                              messageDirty={messageDirty} messageOnChangeHandler={messageOnChangeHandler}
                              blurHandler={blurHandler}/>
                <div>{dataError}</div>
                <button className='btn' type='submit'>Register</button>
            </form>
        </div>
    );
};

export const RegisterForm = React.memo(Form);
