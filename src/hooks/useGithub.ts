import { GithubService } from '@/core/services/github'
import { ParsedGithubUsers } from '@/core/types/github'
import { useState } from 'react'

export const useGithub = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<ParsedGithubUsers>()

  const fetchUsers = (userName: string) => {
    setIsLoading(true)
    return GithubService.getUsers(userName)
      .then(setUsers)
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    fetchUsers,
    users
  }
}
