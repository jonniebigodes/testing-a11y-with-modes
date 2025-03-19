import type { Meta, StoryObj } from '@storybook/react'

import { allModes } from '../../../.storybook/modes'

import { Review } from './Review'

const meta = {
  title: 'Components/Review',
  component: Review,
  parameters: {
    chromatic: {
      modes: {
        light: allModes.light,
        dark: allModes.dark,
        '80': allModes['80'],
        '80s-small': allModes['80s-small'],
      },
    },
  },
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
      },
    },
  },
} satisfies Meta<typeof Review>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Excellent: Story = {
  args: {
    rating: 5,
  },
}

export const VeryGood: Story = {
  args: {
    rating: 4.3,
  },
}

export const Adequate: Story = {
  args: {
    rating: 2.5,
  },
}

export const Poor: Story = {
  args: {
    rating: 1.5,
  },
}
