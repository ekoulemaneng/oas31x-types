import SpecificationExtensions from "./specification-extension"

type ExternalDocumentationObject = {
    description?: string
    url: string
} & SpecificationExtensions

export default ExternalDocumentationObject