import { GithubResponse, ParsedGithubUser } from '../types/github'
import { GithubParser } from '../parser/github'

export const GithubService = {
  async getUsers (userName: String): Promise<ParsedGithubUser> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API_URL}?q=${userName}`)
        const userData = await res.json()
        return GithubParser.list(userData)
  }
}
