import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"

const MainPage = TypedMemo(() => {
	return (
		<VStack>
			<h1>привет мир</h1>
		</VStack>
	)
})

export default MainPage
