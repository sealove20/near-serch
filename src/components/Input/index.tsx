import { useState } from 'react'
import styles from './styles.module.css'

type Props = {
	displayValue: string
	setDisplayValue: (value: string) => void
	customStyle?: string
}

export const Input: React.FC<Props> = ({
	displayValue,
	setDisplayValue,
	customStyle = '',
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDisplayValue(event.target.value)
	}

	return (
		<input
			type="text"
			className={`${styles.input} ${customStyle}`}
			placeholder="Buscar perfil"
			onChange={handleChange}
			value={displayValue}
		/>
	)
}
