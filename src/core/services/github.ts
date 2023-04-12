import { GithubResponse, ParsedGithubUser, ParsedUser } from '../types/github'
import { GithubParser } from '../parser/github'

export const GithubService = {
  async getUsers (userName: string): Promise<ParsedGithubUser> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_USERS_API_URL}?q=${userName}`)
        const userData = await res.json()
        return GithubParser.list(userData)
  },
  async getUser (userName: string): Promise<ParsedUser> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_USER_API_URL}/${userName}`)
        const userData = await res.json()
        return GithubParser.user(userData)
  }
}
