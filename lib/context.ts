import { createContext } from 'react'

export interface PostContextInterface {
  contentType: 'text' | 'image'
  desc: string
  likes: number
  liked: boolean
}

export interface AppContextInterface {
  user:
    | Record<string, any>
    | {
        avatarUrl: string
        userId: number
      }
  isSignedIn: boolean
}

const AppContext = createContext({
  isSignedIn: false,
  user: {
    avatarUrl: '',
    userId: 20323
  }
})

const PostContext = createContext({
  contentType: 'text',
  desc: 'I think you forgot to define something',
  likes: 1337,
  liked: false
})

export { AppContext, PostContext }
