import React  from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

interface Props {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	touched: boolean;
	error: string;
	type?: string;
	handleTouch: (e: React.FocusEvent<HTMLInputElement>) => void;
	name?: string;
	placeholder?: string
}

const PInput: React.FC<Props> = ({ handleChange, touched, handleTouch, error, ...props}) => {
	return (
		<div className={styles.PInput__container}>
			<input
				className={classNames(styles.PInput__input, {
					[styles.PInput__input_error]: !!error
				})}
				onBlur={handleTouch}
				onChange={handleChange}
				{...props}
			/>
			{error && touched && (
				<div className={styles.PInput__errorContainer}>
					<div className={styles.PInput__errorText}>{error}</div>
				</div>
			)}
		</div>
	)
}

export default PInput
