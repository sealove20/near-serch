import { useRouter } from 'next/router'

export default function UserPage() {
	const router = useRouter()
	const login = router.query.login as string

	return (
		<>
			<p onClick={() => router.back()}>VOLTAR</p>
			<h1>User: {login}</h1>
		</>
	)
}
