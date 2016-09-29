const schema = [`
  type UserProfile {
    username: String
    email: String
    avatar_url: String
  },
  type GithubInfo {
    id: Int
    username: String
    nickname: String
    avatar_url: String
    type: String
    public_repos: Int
    public_gists: Int
    followers: Int
    following: Int
    bio: String
    blog: String
    location: String
    hireable: Boolean
    company: String
    site_admin: Boolean
    api_url: String
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
    created_at: String
    updated_at: String
  },
  type User {
    _id: String!
    username: String
    roles: String
    heratbeat: String
    profile: UserProfile
    githubInfo: GithubInfo
    createdAt: Float
    updatedAt: Float
  }
`];

export default schema;
