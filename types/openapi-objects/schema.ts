import DiscriminatorObject from "./discriminator"
import ExternalDocumentationObject from "./external-documentation"
import SpecificationExtensions from "./specification-extension"
import XMLObject from "./xml"

type SchemaObject = {
    discriminator?: DiscriminatorObject
    xml?: XMLObject
    externalDocs?: ExternalDocumentationObject
    example: any
} & SpecificationExtensions

export default SchemaObject