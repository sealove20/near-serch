import { useState } from 'react'
import styles from './styles.module.css'

type Props = {
	displayValue: string
	setDisplayValue: (value: string) => void
}

export const Input: React.FC<Props> = ({ displayValue, setDisplayValue }) => {
	const { input } = styles

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDisplayValue(event.target.value)
	}

	return (
		<input
			type="text"
			className={input}
			placeholder="Buscar perfil"
			onChange={handleChange}
			value={displayValue}
		/>
	)
}
