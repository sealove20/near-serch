import styles from './styles.module.css'

export const Input = () => {
	const { input } = styles
	return <input type="text" className={input} />
}
