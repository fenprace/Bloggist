declare module '*.module.css'

interface IUser {
  avatar_url: string
  html_url: string
  id: number
  login: string
  url: string
}

interface ILabel {
  color: string
  description: string
  id: number
  name: string
  url: string
}

interface IIssue {
  body: string
  comments_url: string
  comments: number
  created_at: string
  html_url: string
  id: number
  labels: ILabel[]
  number: number
  state: string
  title: string
  updated_at: string
  url: string
  user: IUser
}

interface IConfig {}
