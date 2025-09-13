import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { Footer } from "./Footer"

const meta: Meta<typeof Footer> = {
	title: "widgets/Footer",
	component: Footer,
	args: {},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || [])]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Footer>

export const Default: TypeStory = {}
