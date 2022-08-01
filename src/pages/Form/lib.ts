import { FormDataInterface } from './types'

const isEmailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
const lettersOnlyReg = /^[A-Za-z]+$/gi
const isNumbersReg = /^[0-9]+$/gi

export const validatePhone = (newPhone: string) : string => {
	const phone = newPhone.trim()
	const withoutPrefix = phone.substring(2)

	if (!isNumbersReg.test(withoutPrefix)) return 'Phone should consist of only numbers'

	if (phone.length < 2 || phone.length > 12) return 'Phone is out of range'

	return ''
}

export const validateNames = (newNames: string): string => {
	if (!newNames) return 'Names are required'
	const names = newNames.trim()
	if (!lettersOnlyReg.test(names.replaceAll(' ', ''))) {
		return 'Name should consist of only letters'
	}

	const firstName = names.split(' ')[0]
	if (firstName.length < 3 || firstName.length > 30) return 'First name is out of range'

	const lastName = names.split(' ')[1]
	if (!lastName) return 'No surname'
	if (lastName.length < 3 || lastName.length > 30) return 'Last name is out of range'

	const rest = names.split(' ')[2]
	console.log('rest', rest)
	if (rest) return 'You should enter only name and surname'

	return ''
}

export const validateEmail = (newEmail: string): string => {
	const email = newEmail.trim()

	if (!email) return 'Email is required'
	if (!isEmailReg.test(email)) return 'Email is invalid'

	return ''
}

export const validateMessage = (newMessage: string) : string => {
	const message = newMessage.trim()

	if (message.length < 10 || message.length > 100) return 'Message is out of range'

	return ''
}

export const sendData = (data: FormDataInterface) => {
	fetch('http://localhost:8080/qwe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(res => {
			console.log(res.status)
		})
		.catch(err => {
			console.log('err', err)
		})
}
