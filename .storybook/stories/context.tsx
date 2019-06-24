// this thing wires knobs to AppContext.Provider, so you can play around with context
import React, { ReactNodeArray } from 'react'
import AppContext from '../../lib/context'

import { text, number, boolean, object, files } from '@storybook/addon-knobs'

export const StorybookContext = (props: Record<string, ReactNodeArray>) => {
  const userGroup = 'User'
  const contextGroup = 'Context'

  /* eslint-disable react/display-name */
  let contextValue = {
    user: {
      userId: number('User ID', 1, userGroup),
      name: text('Username', 'stuff', userGroup),
      nsfw: boolean('NSFW', false, userGroup),
      posts: object('Posts', [], userGroup),
      avatarUrl: files('Avatar', '', userGroup)
    },
    isSignedIn: boolean('Is signed in', false, contextGroup),
    Link: (props: any) => <>{props.children}</>
  }

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
}
