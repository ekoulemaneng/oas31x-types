import SpecificationExtensions from "./specification-extension"
import ExternalDocumantationObject from "./external-documentation"

type TagObject = {
    name: string
    description?: string
    externalDocs?: ExternalDocumantationObject
} & SpecificationExtensions

export default TagObject