import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { Skeleton } from "./Skeleton"

const meta: Meta<typeof Skeleton> = {
	title: "ui/Skeleton",
	component: Skeleton,
	args: {},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || [])]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Skeleton>

export const Default: TypeStory = {}
