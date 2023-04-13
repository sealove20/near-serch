import styles from './styles.module.css'

type Props = {
	children: string
	onClick: () => void
	customStyle?: string
	disabled?: boolean
}

export const Button: React.FC<Props> = ({
	children,
	onClick,
	customStyle = '',
	disabled,
}) => {
	return (
		<button
			className={`${styles.button} ${customStyle}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
