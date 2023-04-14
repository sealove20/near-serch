import styles from './styles.module.css'

import githubIcon from '../../../public/github-mark.svg'
import backIcon from '../../../public/back.png'
import { Button } from '@/components/Button'
import { useGithub } from '@/hooks/useGithub'
import { ParsedUsers } from '@/core/types/github'
import { Card } from '../Card'
import { Input } from '../Input'
import { Layout } from '../Layout'
import { useState } from 'react'
import Image from 'next/image'
import { Loading } from '../Loading'
import { ModalPage } from '../ModalPage'
import { UserTitle } from '../UserTitle'


export const Dashboard: React.FC = () => {
	const [displayValue, setDisplayValue] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { fetchUsers, users, isLoading } = useGithub()
	const hasUsers = users?.totalCount! > 0

	const onModalOpen = () => setIsModalOpen(true)
	const onModalClose = () => setIsModalOpen(false)

	const [userData, setUserData] = useState<ParsedUsers>()
	const handleModalOpen = (user: ParsedUsers) => {
		setUserData(user)
		onModalOpen()
	}

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
						onSubmit={onSubmit}
					/>
					<Button onClick={onSubmit} disabled={displayValue.length === 0}>
						Buscar
					</Button>
				</div>
			</section>
			{isLoading ? (
				<Loading />
			) : hasUsers ? (
				users?.users?.map(user => (
					<Card
						key={user.id}
						customStyle={styles.card_custom_style}
						onClick={() => handleModalOpen(user)}
					>
						<Image
							src={user.avatarUrl}
							alt="user avatar photo"
							width={50}
							height={50}
						/>
						<UserTitle title="Username" content={user.login} />
						<UserTitle title="Role" content={user.siteAdmin ? 'Admin' : 'Not an admin'} />
					</Card>
				))
			) : (
				<p>Usuários não encontrados</p>
			)}
			<ModalPage
				isModalOpen={isModalOpen}
				onModalClose={onModalClose}
			>
				<Button customStyle={styles.back_button} onClick={onModalClose}>
					<Image
						priority
						src={backIcon}
						alt="Follow they on github"
						height={16}
						width={16}
					/>
					<p className={styles.back_button_content}>Voltar</p>
				</Button>
				<Layout>
					{isLoading ? (
						<Loading />
					) : (
						<>
							<Image
								src={userData?.avatarUrl!}
								alt="user avatar photo"
								width={150}
								height={150}
							/>
							<UserTitle title="Username" content={userData?.login} customInfoStyle={styles.custom_info} />
							<UserTitle title="User id" content={userData?.id} customInfoStyle={styles.custom_info} />
							<Button onClick={onModalClose} customStyle={`${styles.info} ${styles.github_button}`}>
								<a href={userData?.htmlUrl} target="_blank">
									Página do usuário
								</a>
								<Image
									priority
									src={githubIcon}
									alt="Follow they on github"
									height={20}
									width={20}
								/>
							</Button>
						</>
					)}
				</Layout>
			</ModalPage>
		</Layout>
	)
}
