import styles from './styles.module.css'

export const Loading = () => {
	return (
		<div className={styles.loading_container}>
			<div className={styles.loading_spinner}></div>
		</div>
	)
}
