import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { PromoSlider } from "./PromoSlider"

const meta: Meta<typeof PromoSlider> = {
	title: "widgets/PromoSlider",
	component: PromoSlider,
	args: {},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || [])]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof PromoSlider>

export const Default: TypeStory = {}
