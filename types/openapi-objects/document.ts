import InfoObject from './info'
import ServerObject from './server'
import PathsObject from './paths'
import PathItemObject from './path-item'
import ReferenceObject from './reference'
import ComponentsObject from './components'
import SecurityRequirementObject from './security-requirement'
import TagObject from './tag'
import ExternalDocumentationObject from './external-documentation'
import SpecificationExtensions from './specification-extension'

type Document = {
    openapi: '3.1.0'
    info: InfoObject
    jsonSchemaDialect?: string
    servers?: Array<ServerObject>
    paths?: PathsObject
    webhooks?: Record<string, PathItemObject | ReferenceObject>
    components?: ComponentsObject
    security?: Array<SecurityRequirementObject>
    tags?: Array<TagObject>
    externalDocs?: ExternalDocumentationObject
} & SpecificationExtensions

export default Document