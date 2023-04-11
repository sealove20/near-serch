import { GithubService } from '@/core/services/github'
import { ParsedGithubUser } from '@/core/types/github'
import { useState } from 'react'

export const useGithub = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<ParsedGithubUser>()

  const fetchUsers = (userName: string) => {
    setLoading(true)
    return GithubService.getUsers(userName)
      .then(setUsers)
      .finally(() => setLoading(false))
  }

  return {
    loading,
    fetchUsers,
    users
  }
}
