import { GithubService } from '@/core/services/github'
import { ParsedGithubUser, ParsedUser } from '@/core/types/github'
import { useState } from 'react'

export const useGithub = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<ParsedGithubUser>()
  const [user, setUser] = useState<ParsedUser>()

  const fetchUsers = (userName: string) => {
    setIsLoading(true)
    return GithubService.getUsers(userName)
      .then(setUsers)
      .finally(() => setIsLoading(false))
  }

  const fetchUser = (userName: string) => {
    setIsLoading(true)
    return GithubService.getUser(userName)
      .then(setUser)
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    fetchUsers,
    fetchUser,
    users,
    user
  }
}
