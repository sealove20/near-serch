export interface GithubResponse {
    incomplete_results: Boolean
    items: GithubUser[]
    total_count: Number
}

export interface GithubUser {
    login: String
    id: Number
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
    score: Number
}

export interface ParsedGithubUser {
    incompleteResults: Boolean
    totalCount: Number
    users: ParsedUsers[]
}

export interface ParsedUsers {
    avatarUrl: String
    htmlUrl: String
    id: Number
    login: String
    siteAdmin: Boolean
}