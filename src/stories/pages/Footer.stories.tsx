import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import Footer from "../../components/footer/Footer"

export default {
  title: "Pages/Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args: any) => (
  <Footer {...args} />
)

export const whiteFooter = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

// type propType = {
//   canvasElement: HTMLElement
// }

// LoggedIn.play = async (props: propType) => {
//   const canvas = within(props?.canvasElement)
//   const loginButton = await canvas.getByRole("button", { name: /Log in/i })
//   await userEvent.click(loginButton)
// }
