import InboxScreen from "components/pages/InboxScreen"
import { store } from "lib/store"
import { Provider } from "react-redux"
import { rest } from "msw"
import { mockTaskData } from "mock"
import { ComponentMeta, Story } from "@storybook/react"

export default {
  component: InboxScreen,
  title: "Pages/Redux/InboxScreen",
  decorators: [
    (story: typeof InboxScreen) => <Provider store={store}>{story()}</Provider>,
  ],
} as ComponentMeta<typeof InboxScreen>

const Template: Story<typeof InboxScreen> = () => <InboxScreen />

export const Error = Template.bind({})
export const Basic = Template.bind({})
Basic.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(ctx.json(mockTaskData.tasks))
        }
      ),
    ],
  },
}

Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(ctx.status(400))
        }
      ),
    ],
  },
}
