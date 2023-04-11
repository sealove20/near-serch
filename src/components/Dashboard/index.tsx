import styles from './styles.module.css'

import { Card } from '../Card'
import { Input } from '../Input'
import { Layout } from '../Layout'
import { Button } from '@/Button'
import { useState } from 'react'
import { useGithub } from '@/hooks/useGithub'
import Image from 'next/image'
import Link from 'next/link'

export const Dashboard: React.FC = () => {
	const [displayValue, setDisplayValue] = useState('')
	const { fetchUsers, users } = useGithub()

	const onSubmit = () => {
		fetchUsers(displayValue)
	}

	return (
		<Layout>
			<section>
				<h1 className={styles.dashboard_title}>Buscar perfil</h1>
				<Input displayValue={displayValue} setDisplayValue={setDisplayValue} />
				<Button onSubmit={onSubmit} />
			</section>
			<p>Total de perfis encontrados {users?.totalCount}</p>
			<div>
				{users
					? users?.users?.map((user, index) => (
							<Link key={index} href={`/user/${user?.login}`}>
								<Card customStyle={styles.card_custom_style}>
									<Image
										src={user.avatarUrl}
										alt="user avatar photo"
										width={50}
										height={50}
									/>
									<p>{user.login}</p>
									<p>{user.siteAdmin ? 'ADMIN' : 'NOT ADMIN'}</p>
								</Card>
							</Link>
					  ))
					: null}
			</div>
		</Layout>
	)
}
