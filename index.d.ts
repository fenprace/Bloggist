interface IUser {
  avatar_url: string
  html_url: string
  id: number
  login: string
  url: string
}

interface IIssue {
  body: string
  comments_url: string
  comments: number
  created_at: string
  html_url: string
  id: number
  number: number
  state: string
  title: string
  updated_at: string
  url: string
  user: IUser
}

interface IConfig {}
