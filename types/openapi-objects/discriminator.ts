import SpecificationExtensions from "./specification-extension"

type DiscriminatorObject = {
    propertyName: string
    mapping?: Record<string, string>
} & SpecificationExtensions

export default DiscriminatorObject