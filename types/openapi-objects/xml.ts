import SpecificationExtensions from "./specification-extension"

type XMLObject = {
    name?: string
    namespace?: string
    prefix?: string
    attribute?: boolean
    wrapped?: boolean
} & SpecificationExtensions

export default XMLObject