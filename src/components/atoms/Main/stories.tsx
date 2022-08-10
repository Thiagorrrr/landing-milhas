import { Main } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  }
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Sua loja Pet',
  description: 'Sua nova loja pet'
}
