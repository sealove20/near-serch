import { ParsedGithubUsers } from '../types/github'
import { GithubParser } from '../parser/github'

export const GithubService = {
  async getUsers(userName: string): Promise<ParsedGithubUsers> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_USERS_API_URL}?q=${userName}`)
    const userData = await res.json()
    return GithubParser.list(userData)
  }
}
