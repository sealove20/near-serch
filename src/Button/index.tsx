import styles from './styles.module.css'

type Props = {
	onSubmit: any
	customStyle?: string
}

export const Button: React.FC<Props> = ({ onSubmit, customStyle = '' }) => {
	return (
		<button className={`${styles.button} ${customStyle}`} onClick={onSubmit}>
			Buscar
		</button>
	)
}
