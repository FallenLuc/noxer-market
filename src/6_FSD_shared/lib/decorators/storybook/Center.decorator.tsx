import type { Decorator } from "@storybook/react-webpack5"

export const CenterDecorator: Decorator = Story => {
	return (
		<div className={"center-container"}>
			<Story />
		</div>
	)
}
