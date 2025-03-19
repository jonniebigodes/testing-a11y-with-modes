import type { Meta, StoryObj } from '@storybook/react'

import { allModes } from '../../../.storybook/modes'

import { PageSection } from './PageSection'

const meta = {
  title: 'Components/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      modes: {
        light: allModes.light,
        dark: allModes.dark,
        '80': allModes['80'],
        '80s-small': allModes['80s-small'],
      },
    },
  },
} satisfies Meta<typeof PageSection>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Asian',
    children: <h1>Hello Dummy Content</h1>,
  },
}

export const WithButtons: Story = {
  args: {
    ...Default.args,
    title: 'Asian',
  },
}
