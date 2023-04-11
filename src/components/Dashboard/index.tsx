import styles from './styles.module.css'

import { Card } from '../Card'
import { Input } from '../Input'
import { Layout } from '../Layout'
import { Button } from '@/Button'
import { useState } from 'react'
import { useGithub } from '@/hooks/useGithub'

export const Dashboard: React.FC = () => {
	const [displayValue, setDisplayValue] = useState('')
	const { fetchUsers } = useGithub()

	const onSubmit = (event: any) => {
		const userName = event.target.value
		fetchUsers(userName)
	}

	return (
		<Layout>
			<section>
				<h1 className={styles.dashboard_title}>Buscar perfil</h1>
				<Input displayValue={displayValue} setDisplayValue={setDisplayValue} />
				<Button onSubmit={onSubmit} />
			</section>
			<Card>
				<div />
				<p>User Name</p>
				<p>isAdmin</p>
			</Card>
		</Layout>
	)
}
