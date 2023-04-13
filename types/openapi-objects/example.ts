import SpecificationExtensions from "./specification-extension"

type ExampleObject = {
    summary?: string
    description?: string
    value?: any
    externalValue?: string
} & SpecificationExtensions

export default ExampleObject