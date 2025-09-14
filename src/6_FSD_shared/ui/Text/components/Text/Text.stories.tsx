import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { Text } from "./Text"

const meta: Meta<typeof Text> = {
	title: "ui/Text",
	component: Text,
	args: {},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || [])]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Text>

export const Default: TypeStory = {}
