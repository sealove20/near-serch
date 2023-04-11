import styles from './styles.module.css'

type Props = {
	children: React.ReactNode
	customStyle?: string
}

export const Card: React.FC<Props> = ({ children, customStyle }) => {
	return <div className={`${styles.card} ${customStyle}`}>{children}</div>
}
