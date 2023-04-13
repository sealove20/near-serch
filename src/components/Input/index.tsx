import { useState } from 'react'
import styles from './styles.module.css'
import { useKeyPress } from '@/hooks/useKeyPress'

type Props = {
	displayValue: string
	setDisplayValue: (value: string) => void
	onSubmit: () => void
	customStyle?: string
}

const GITHUB_VALID_USERNAME = '[a-zA-Z0-9 ]*$'

export const Input: React.FC<Props> = ({
	displayValue,
	setDisplayValue,
	onSubmit,
	customStyle = '',
}) => {
	const { onKeyDown } = useKeyPress()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.match(GITHUB_VALID_USERNAME) != null)
			setDisplayValue(event.target.value)
	}


	return (
		<input
			type="search"
			className={`${styles.input} ${customStyle}`}
			placeholder="Digite o nome de um usuário"
			onChange={handleChange}
			value={displayValue}
			pattern="[a-zA-Z0-9 ]*$"
			onKeyDown={event => displayValue && onKeyDown(event, onSubmit)}
		/>
	)
}
