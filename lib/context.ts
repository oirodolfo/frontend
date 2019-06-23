import { createContext } from 'react'

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

export default AppContext
