import type { Meta, StoryObj } from '@storybook/react'

import { allModes } from '../../../.storybook/modes'

import { LoginForm } from './AuthForm'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Components/AuthForm',
  parameters: {
    chromatic: {
      modes: {
        light: allModes.light,
        dark: allModes.dark,
        '80': allModes['80'],
        '80s-small': allModes['80s-small'],
      },
      viewports: [320, 1200],
    },
  },
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}
