import { createContext } from 'react'

export interface AppContextInterface {
  isSignedIn: boolean
}

const AppContext = createContext({
  isSignedIn: false
})

export default AppContext
