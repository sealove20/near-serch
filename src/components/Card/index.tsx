import styles from './styles.module.css'

type Props = {
	children: React.ReactNode
	customStyle?: string
	onClick?: () => void
}

export const Card: React.FC<Props> = ({ children, customStyle = '', onClick, ...rest }) => {
	return <div className={`${styles.card} ${customStyle}`} {...rest} onClick={onClick}> {children}</div >
}
