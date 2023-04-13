import styles from './styles.module.css'

type Props = {
	children: string
	onClick: any
	customStyle?: string
}

export const Button: React.FC<Props> = ({
	children,
	onClick,
	customStyle = '',
}) => {
	return (
		<button className={`${styles.button} ${customStyle}`} onClick={onClick}>
			{children}
		</button>
	)
}
