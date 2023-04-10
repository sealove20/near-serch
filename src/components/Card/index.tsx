import styles from './styles.module.css'

type Props = {
	children: React.ReactNode
}

export const Card: React.FC<Props> = ({ children }) => {
	return <div className={styles.card}>{children}</div>
}
