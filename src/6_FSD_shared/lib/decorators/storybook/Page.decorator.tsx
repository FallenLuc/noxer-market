import { type Decorator } from "@storybook/react-webpack5"

export const PageDecorator: Decorator = Story => (
	<div className="full-height page-wrapper">
		<Story />
	</div>
)
