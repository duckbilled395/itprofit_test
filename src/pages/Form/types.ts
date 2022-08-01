export interface FormValuesInterface {
	name: string;
	email: string;
	phone: string;
	date: Date | null;
	message: string;
}

export interface FormErrorsInterface {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export interface FormTouchedInterface {
	name: boolean;
	email: boolean;
	phone: boolean;
	message: boolean;
}

export interface FormDataInterface {
	firstName: string,
	lastName: string,
	email: string,
	phone: string,
	date: string,
	message: string,
}
