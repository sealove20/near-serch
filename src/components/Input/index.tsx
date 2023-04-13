import { useState } from 'react'
import styles from './styles.module.css'

type Props = {
	displayValue: string
	setDisplayValue: (value: string) => void
	customStyle?: string
}

const GITHUB_VALID_USERNAME = '[a-zA-Z0-9 ]*$'

export const Input: React.FC<Props> = ({
	displayValue,
	setDisplayValue,
	customStyle = '',
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.match(GITHUB_VALID_USERNAME) != null)
			setDisplayValue(event.target.value)
	}

	return (
		<input
			type="text"
			className={`${styles.input} ${customStyle}`}
			placeholder="Digite o nome de um usuário"
			onChange={handleChange}
			value={displayValue}
			pattern="[a-zA-Z0-9 ]*$"
		/>
	)
}
