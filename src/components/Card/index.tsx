import styles from './styles.module.css'

type Props = {
	children: React.ReactNode
	customStyle?: string
	onClick?: () => void
	name: string
}

export const Card: React.FC<Props> = ({ children, customStyle = '', onClick, name, ...rest }) => {
	return <div className={`${styles.card} ${customStyle}`} {...rest} onClick={onClick} data-cy={name}> {children}</div >
}
