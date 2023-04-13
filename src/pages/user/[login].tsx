import { Button } from '@/Button'
import styles from './styles.module.css'

import { Layout } from '@/components/Layout'
import { useGithub } from '@/hooks/useGithub'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function UserPage() {
	const router = useRouter()
	const login = router.query.login as string
	const { fetchUser, user } = useGithub()

	useEffect(() => {
		fetchUser(login)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<Button customStyle={styles.back_button} onClick={() => router.back()}>
				VOLTAR
			</Button>
			<Layout>
				<Image
					src={user?.avatarUrl!}
					alt="user avatar photo"
					width={150}
					height={150}
				/>
				<p className={styles.info}>
					<span className={styles.title}>Username:</span> {user?.login}
				</p>
				<p className={styles.info}>
					<span className={styles.title}>User id:</span> {user?.id}
				</p>
				<a className={styles.info} href={user?.htmlUrl} target="_blank">
					<span className={styles.user_page}>Página do usuário</span>
				</a>
			</Layout>
		</>
	)
}
