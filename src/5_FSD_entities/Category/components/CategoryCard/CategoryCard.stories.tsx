import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { CategoryCard } from "./CategoryCard"

const meta: Meta<typeof CategoryCard> = {
	title: "entities/CategoryCard",
	component: CategoryCard,
	args: {},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || [])]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof CategoryCard>

export const Default: TypeStory = {}
