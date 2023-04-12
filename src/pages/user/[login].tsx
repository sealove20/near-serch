import { Layout } from '@/components/Layout'
import { useGithub } from '@/hooks/useGithub'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function UserPage() {
	const router = useRouter()
	const login = router.query.login as string
	const { fetchUser, user } = useGithub()
	console.log({ login })

	useEffect(() => {
		fetchUser(login)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<p onClick={() => router.back()}>VOLTAR</p>
			<Layout>
				<Image
					src={user?.avatarUrl!}
					alt="user avatar photo"
					width={150}
					height={150}
				/>
				<p>Username: {user?.login}</p>
				<p>User id: {user?.id}</p>
				<a href={user?.htmlUrl} target="_blank">
					Página do usuário
				</a>
			</Layout>
		</>
	)
}
