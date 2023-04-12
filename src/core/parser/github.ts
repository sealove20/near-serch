import { GithubResponse, GithubUser, GithubUserResponse } from "../types/github"

export const GithubParser = {
    list: (userData: GithubResponse) => {
        const { incomplete_results, items, total_count } = userData
        const hasTooMany = total_count > 10
        const parsedUsers = items?.map(GithubParser.instance)
    
        return {
            incompleteResults: incomplete_results,
            users: hasTooMany ? parsedUsers.slice(0, 10) : parsedUsers,
            totalCount: total_count
        }
    },
    instance: (user: GithubUser) => {
        const { 
            avatar_url,
            login,
            site_admin,
            id,
            html_url
        } = user

        return {
            avatarUrl: avatar_url,
            login,
            siteAdmin: site_admin,
            id,
            htmlUrl: html_url
        }
    },
    user: (userData: GithubUserResponse) => {
        const { avatar_url, login, id, html_url } = userData

        return {
            avatarUrl: avatar_url,
            login,
            id,
            htmlUrl: html_url
        }
    }
}
