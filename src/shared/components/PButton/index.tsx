import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

export enum ButtonTypes {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset'
}

interface Props {
	type: ButtonTypes;
	className?: string;
}

const PButton: React.FC<PropsWithChildren<Props>> = ({ className, children, type}) => {

	return (
		<div className={styles.PButton__container}>
			<button
				className={classNames(styles.PButton__button, className)}
				type={type || ButtonTypes.BUTTON}
			>
				{children}
			</button>
		</div>
	)
}

export default PButton
