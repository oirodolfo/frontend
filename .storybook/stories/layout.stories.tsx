import React, { ReactNodeArray } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, files, object } from '@storybook/addon-knobs'

import { StorybookContext } from './context'
import NavBar from '../../components/Layout/NavBar'

const stories = storiesOf('Layout', module)

stories.addDecorator(withKnobs)

stories.add('navbar', () => {
  return (
    <StorybookContext>
      <NavBar Logo={files('Logo', '../../assets/logo.js', ['../../assets/logo.js'])} loginLinks={object('Guest links', [])} />
    </StorybookContext>
  )
})
