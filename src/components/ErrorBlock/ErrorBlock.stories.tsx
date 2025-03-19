import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import sushi from '../../assets/images/sushi.svg'
import { AnimatedIllustration } from '../AnimatedIllustration'
import { allModes } from '../../../.storybook/modes'

import { ErrorBlock } from './ErrorBlock'
const meta = {
  title: 'Components/ErrorBlock',
  component: ErrorBlock,
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
  args: {
    /* 
    The following line emulates the event handler that would be passed to the component
    Read more about the `fn` utility function at
    https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function 
    */
    onButtonClick: fn(),
  },
} satisfies Meta<typeof ErrorBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'This is not the food you’re looking for.',
    body: 'There seems that there are no restaurants in this category yet. Try to come back later?',
    image: <img alt="no restaurants found" src={sushi} />,
    buttonText: 'See all restaurants',
  },
}

/* export const Error500: Story = {
  args: {
    title: 'Something went wrong!',
    body: 'Our bad, something went wrong on our side.',
    image: <AnimatedIllustration animation="Error" />,
    buttonText: 'Try again',
  },
} */

export const Error404: Story = {
  args: {
    title: "We can't find this page",
    body: 'This page doesn’t exist, keep looking.',
    image: <AnimatedIllustration animation="NotFound" />,
    buttonText: 'Home',
  },
}
