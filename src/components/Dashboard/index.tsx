import styles from './styles.module.css'

import { Card } from '../Card'
import { Input } from '../Input'
import { Layout } from '../Layout'

export const Dashboard: React.FC = () => {
	return (
		<Layout>
			<section>
				<h1 className={styles.dashboard_title}>Buscar perfil</h1>
				<Input />
			</section>
			<Card>
				<div />
				<p>User Name</p>
				<p>isAdmin</p>
			</Card>
		</Layout>
	)
}
