import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { Navigation } from "./Navigation"

const meta: Meta<typeof Navigation> = {
	title: "features/Navigation",
	component: Navigation,
	args: {},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || [])]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Navigation>

export const Default: TypeStory = {}
