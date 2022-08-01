import React, { FC, FormEvent, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import PInput from 'shared/components/PInput'
import PButton, { ButtonTypes } from 'shared/components/PButton'

import { sendData, validateEmail, validateMessage, validateNames, validatePhone } from './lib'
import { FormErrorsInterface, FormTouchedInterface, FormValuesInterface } from './types'
import styles from './styles.module.scss'

const Form: FC = () => {
	const [values, setValues] = useState<FormValuesInterface>({
		name: '',
		email: '',
		date: new Date(),
		phone: '+8',
		message: ''
	})
	const [touched, setTouched] = useState<FormTouchedInterface>({
		name: false,
		email: false,
		phone: false,
		message: false,
	})
	const [errors, setErrors] = useState<FormErrorsInterface>({
		name: validateNames(''),
		email: validateEmail(''),
		phone: validatePhone('+8'),
		message: validateMessage('')
	})

	const handleChange = (validate: (value: string) => string) => (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value })
		setErrors({ ...errors, [e.target.name]: validate(e.target.value) })
	}

	const handleTouch = (e: React.FocusEvent<HTMLInputElement>) => {
		setTouched({...touched, [e.target.name]: true})
	}

	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (Object.values(errors).filter(err => err !== '').length === 0) {
			const target = e.target as typeof e.target & {
				name: { value: string };
				email: { value: string };
				phone: { value: string };
				message: { value: string };
				date: { value: string };
			}
			const resData = {
				firstName: target.name.value.split(' ')[0],
				lastName: target.name.value.split(' ')[1],
				email: target.email.value,
				phone: target.phone.value,
				date: target.date.value,
				message: target.message.value
			}
			sendData(resData)
		}
		else {
			setTouched({
				name: true,
				email: true,
				phone: true,
				message: true
			})
		}

	}


	return (
		<div className={styles.Form__container}>
			<form
				className={styles.Form__form}
				onSubmit={handleOnSubmit}
				noValidate
			>
				<PInput
					name='name'
					placeholder='Name and surname'
					touched={touched.name}
					value={values.name}
					error={errors.name}
					handleTouch={handleTouch}
					handleChange={handleChange(validateNames)}
				/>
				<PInput
					name='email'
					placeholder='Email'
					touched={touched.email}
					value={values.email}
					error={errors.email}
					handleTouch={handleTouch}
					handleChange={handleChange(validateEmail)}
				/>
				<PInput
					name='phone'
					placeholder='Phone'
					touched={touched.phone}
					value={values.phone}
					error={errors.phone}
					handleTouch={handleTouch}
					handleChange={handleChange(validatePhone)}
				/>
				<div>
					<DatePicker
						className={styles.Form__datePickerContainer}
						name='date'
						selected={values?.date}
						onChange={(newDate) => setValues({ ...values, date: newDate })}
					/>
				</div>
				<PInput
					name='message'
					placeholder='Message'
					value={values.message}
					error={errors.message}
					touched={touched.message}
					handleTouch={handleTouch}
					handleChange={handleChange(validateMessage)}
				/>
				<PButton type={ButtonTypes.SUBMIT}>Register</PButton>
			</form>
		</div>
	)
}

export default React.memo(Form)
