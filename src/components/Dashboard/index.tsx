import styles from './styles.module.css'

import { Card } from '../Card'
import { Input } from '../Input'
import { Layout } from '../Layout'
import { Button } from '@/components/Button'
import { useState } from 'react'
import { useGithub } from '@/hooks/useGithub'
import Image from 'next/image'
import Link from 'next/link'
import { Loading } from '../Loading'

export const Dashboard: React.FC = () => {
	const [displayValue, setDisplayValue] = useState('')
	const { fetchUsers, users, isLoading } = useGithub()

	const onSubmit = () => {
		fetchUsers(displayValue)
	}

	return (
		<Layout>
			<section>
				<h1 className={styles.dashboard_title}>Buscar perfil</h1>
				<div className={styles.search_wrapper}>
					<Input
						displayValue={displayValue}
						setDisplayValue={setDisplayValue}
						customStyle={styles.input_custom_style}
					/>
					<Button onClick={onSubmit} disabled={displayValue.length === 0}>
						Buscar
					</Button>
				</div>
			</section>
			{isLoading ? (
				<Loading />
			) : users?.totalCount > 0 ? (
				users?.users?.map((user, index) => (
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
			) : (
				<p>Usuários não encontrados</p>
			)}
		</Layout>
	)
}
