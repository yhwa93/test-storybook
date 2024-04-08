import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, fn, expect, findByRole } from '@storybook/test'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  args: {
    // 👇 onSubmit을 감시하기위해 fn 사용
    onSubmit: fn(),
  },
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const EmptyForm: Story = {}

export const FilledForm: Story = {
  render: () => <LoginForm />,
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('id'), 'billie')

    //await userEvent.click(canvas.getByRole('button', { name: 'test' }))

    // await step('Enter credentials', async () => {
    //   await userEvent.type(canvas.getByTestId('id'), 'aa')
    //   await userEvent.type(canvas.getByTestId('password'), 'supersecret')
    // })
    //
    // await step('Submit form', async ({ args }: { args: any }) => {
    //   await userEvent.click(canvas.getByRole('button'))
    //   await expect(args.onClick).toHaveBeenCalled()
    // })

    // await userEvent.type(form.getByTestId('id'), 'aa')

    // await userEvent.type(canvas.getByTestId('password'), 'a-random-password')

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    // await userEvent.click(canvas.getByRole('button'))

    // 👇 Assert DOM structure
    // await expect(canvas.getByText('Everything is perfect. Your account is ready and we should probably get you started!')).toBeInTheDocument()
  },
}
