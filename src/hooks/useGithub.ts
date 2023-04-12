import { GithubService } from '@/core/services/github'
import { ParsedGithubUser, ParsedUser } from '@/core/types/github'
import { useState } from 'react'

export const useGithub = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<ParsedGithubUser>()
  const [user, setUser] = useState<ParsedUser>()

  const fetchUsers = (userName: string) => {
    setLoading(true)
    return GithubService.getUsers(userName)
      .then(setUsers)
      .finally(() => setLoading(false))
  }

  const fetchUser = (userName: string) => {
    setLoading(true)
    return GithubService.getUser(userName)
      .then(setUser)
      .finally(() => setLoading(false))
  }

  return {
    loading,
    fetchUsers,
    fetchUser,
    users,
    user
  }
}
